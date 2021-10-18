import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Text from "./Components/basic-element/text";
import Layout from "./Components/basic-element/layout";
import Container from "./Components/basic-element/container";
import {
  BLUE_COLOR,
  GREY_COLOR,
  LIGHT_GREY_COLOR,
  RED_ERROR_COLOR,
} from "../constants/colors";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/router";
import { xValues } from "../constants/chartValues";

const Details: React.FunctionComponent<{
  newData: any;
  owner: string;
  repo: string;
}> = ({ newData, owner, repo }) => {
  const router = useRouter();
  const [issuesValues, setIssuesValues] = useState([]);
  const [messageDisplay, setMessageDisplay] = useState("");
  console.log(newData);
  console.log(owner);
  console.log(repo);
  const issues = {
    label: "Open issues",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
    pointRadius: 1,
    pointHitRadius: 10,
    data: issuesValues,
  };

  const dataChart = {
    labels: xValues,
    datasets: [issues],
  };

  useEffect(() => {
    formatDataIssues(newData);
  }, []);

  const formatDataIssues = (issues: any) => {
    console.log("issues", issues);
    if (issues.message) {
      setMessageDisplay(issues.message);
      return;
    }
    if (issues == null || issues?.lenth == null) {
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
    setIssuesValues(tmpValues);
  };

  return (
    <div className={styles.container}>
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
              <Text size={16} bold={true} color={BLUE_COLOR}>
                Choose another repository
              </Text>
            </div>
          </Container>
          <Container>
            <Text size={50} bold={true} color={GREY_COLOR}>
              {owner}/{repo}
            </Text>
          </Container>

          <Container>
            <Text size={20} color={LIGHT_GREY_COLOR}>
              The cloud native application
            </Text>
          </Container>

          <Container>
            {messageDisplay != "" ? (
              <Text bold={true} size={16} color={RED_ERROR_COLOR}>
                {messageDisplay}
              </Text>
            ) : (
              <Line data={dataChart} width={100} height={25} />
            )}
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const options = {
    since: {
      date: "2020-01-01",
      time: "00:00:00",
    },
  };

  const { owner, repo } = context.query;
  if (owner && repo) {
    const req = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=100&since=${options["since"]["date"]}T${options["since"]["time"]}Z&sort=updated`
    );
    const newData = await req.json();
    return { props: { newData, owner, repo } };
  } else {
    return {
      props: {
        newData: [],
        owner: "",
        repo: "",
      },
    };
  }
};

export default Details;
