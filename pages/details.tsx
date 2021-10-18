import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { StyledContainer, StyledMain } from "../styles/style";
import Text from "./Components/basic-element/text";
import Layout from "./Components/basic-element/layout";
import Container from "./Components/basic-element/container";
import { GetCorrectTheme } from "../constants/colors";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/router";
import { xValues } from "../constants/chartValues";
import { RequestIssues } from "../request/index";
const Details: NextPage<{
  openedIssues: any;
  owner: string;
  repo: string;
  closedIssues: any;
  description: string;
}> = ({ openedIssues, owner, repo, description, closedIssues }) => {
  const router = useRouter();
  const [issuesValues, setIssuesValues] = useState([]);
  const [closedIssuesValues, setClosedIssuesValues] = useState([]);
  const [messageDisplay, setMessageDisplay] = useState("");
  const [themeValue, setThemeValue]: any = useState({});

  const openIssuesChartData = {
    label: "Open issues",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
    pointRadius: 1,
    pointHitRadius: 10,
    data: issuesValues,
  };

  const closedIssuesChartData = {
    label: "closed issues",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "red",
    borderColor: "red",
    pointRadius: 1,
    pointHitRadius: 10,
    data: closedIssuesValues,
  };

  const dataChart = {
    labels: xValues,
    datasets: [openIssuesChartData, closedIssuesChartData],
  };

  useEffect(() => {
    // THEME SWAP CODE
    const themeValueLocalStorage: string | null =
      window.localStorage.getItem("THEME");
    setThemeValue(GetCorrectTheme(themeValueLocalStorage));

    formatDataIssues(openedIssues, setIssuesValues);
    formatDataIssues(closedIssues, setClosedIssuesValues);
  }, []);

  const formatDataIssues = (issues: any, setter: any) => {
    if (issues.message) {
      setMessageDisplay(issues.message);
      return;
    }
    if (issues == null || issues?.length == null) {
      return;
    }
    const values: any = {};
    xValues.forEach((x: any) => {
      values[x] = { number: 0 };
    });
    issues?.forEach((e: any) => {
      values[e?.updated_at?.substring(0, 7)].number += 1;
    });
    const tmpValues: any = [];
    const keys = Object.keys(values);
    keys.forEach((k: string) => {
      tmpValues.push(values[k].number);
    });
    setter(tmpValues);
  };

  return (
    <StyledContainer>
      <Head>
        <title>Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div style={{ padding: 50 }}>
          <Container>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push({
                  pathname: "/",
                });
              }}
            >
              <Text size={16} bold={true} color={themeValue.BLUE_COLOR}>
                Choose another repository
              </Text>
            </div>
          </Container>
          <Container>
            <Text size={50} bold={true} color={themeValue.GREY_COLOR}>
              {owner}/{repo}
            </Text>
          </Container>

          <Container>
            <Text size={20} color={themeValue.LIGHT_GREY_COLOR}>
              {description}
            </Text>
          </Container>

          <Container>
            {messageDisplay != "" ? (
              <Text bold={true} size={16} color={themeValue.RED_ERROR_COLOR}>
                {messageDisplay}
              </Text>
            ) : (
              <Line data={dataChart} width={100} height={25} />
            )}
          </Container>
        </div>
      </Layout>
    </StyledContainer>
  );
};

const formatIssuesRequest = (owner: string, repo: string, state: string) => {
  const options = {
    since: {
      date: "2020-01-01",
      time: "00:00:00",
    },
  };
  return `https://api.github.com/repos/${owner}/${repo}/issues?state=${state}&per_page=100&since=${options["since"]["date"]}T${options["since"]["time"]}Z&sort=updated`;
};

export const getServerSideProps = async (context: any) => {
  return await RequestIssues(context)
};

export default Details;
