import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { StyledContainer, StyledMain } from "../styles/style";
import Text from "../component/basic-element/text";
import Layout from "../component/basic-element/layout";
import Container from "../component/basic-element/container";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/router";
import { xValues } from "../constants/chartValues";
import { RequestIssues } from "../request/index";
import {
  useTheme,
  selectCorrectTheme,
  useLang,
  setCorrectLang,
} from "../context";

const Details: NextPage<{
  openedIssues: any;
  owner: string;
  repo: string;
  closedIssues: any;
  description: string;
}> = ({ openedIssues, owner, repo, description, closedIssues }) => {
  const router = useRouter();
  const { lang } = useLang();
  const { theme } = useTheme();
  const CURRENT_THEME = selectCorrectTheme(theme);
  const [issuesValues, setIssuesValues] = useState([]);
  const [closedIssuesValues, setClosedIssuesValues] = useState([]);
  const [messageDisplay, setMessageDisplay] = useState("");
  const CURRENT_LANG = setCorrectLang(lang);

  const dataChart = {
    labels: xValues,
    datasets: [
      {
        label: "Open issues",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        pointRadius: 1,
        pointHitRadius: 10,
        data: issuesValues,
      },
      {
        label: "closed issues",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "red",
        borderColor: "red",
        pointRadius: 1,
        pointHitRadius: 10,
        data: closedIssuesValues,
      },
    ],
  };

  useEffect(() => {
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
  const goBackHandler = () => {
    router.push({
      pathname: "/",
    });
  };

  return (
    <StyledContainer>
      <Head>
        <title>Details</title>
      </Head>

      <Layout>
        <div style={{ padding: 50 }}>
          <Container>
            <div style={{ cursor: "pointer" }} onClick={goBackHandler}>
              <Text size={16} bold={true} color={CURRENT_THEME.BLUE_COLOR}>
                {CURRENT_LANG.detail.back}
              </Text>
            </div>
          </Container>
          <Container>
            <Text size={50} bold={true} color={CURRENT_THEME.GREY_COLOR}>
              {owner}/{repo}
            </Text>
          </Container>

          <Container>
            <Text size={20} color={CURRENT_THEME.LIGHT_GREY_COLOR}>
              {description}
            </Text>
          </Container>

          <Container>
            {messageDisplay != "" ? (
              <Text bold={true} size={16} color={CURRENT_THEME.RED_ERROR_COLOR}>
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

export const getServerSideProps = async (context: any) => {
  return await RequestIssues(context);
};

export default Details;
