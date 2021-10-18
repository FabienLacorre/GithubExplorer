import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Text from "./Components/basic-element/text";
import Layout from "./Components/basic-element/layout";
import Container from "./Components/basic-element/container";
import { BLUE_COLOR, GREY_COLOR, LIGHT_GREY_COLOR } from "../constants/colors";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/router";
import { xValues } from "../constants/chartValues";

const Details: React.FunctionComponent<{ newData: any }> = ({ newData }) => {
  const router = useRouter();
  const [issuesValues, setIssuesValues] = useState([]);

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
    const values: any = [];
    xValues.forEach((x: any) => {
      values.push({ date: x, number: 0 });
    });
    issues.forEach((e: any) => {
      let indexTable = values.findIndex(
        (v: any) => v.date === e?.updated_at?.substring(0, 7)
      );
      if (indexTable != -1){
        values[indexTable].number = values[indexTable].number + 1;
      }
    });

    const tmpDate: any = [];
    const tmpValues: any = [];
    values.forEach((e: any) => {
      tmpDate.push(e.date);
      tmpValues.push(e.number);
    });
    setIssuesValues(tmpValues.reverse());
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <>
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
              Traefik/traefik
            </Text>
          </Container>

          <Container>
            <Text size={20} color={LIGHT_GREY_COLOR}>
              The cloud native application
            </Text>
          </Container>

          <Container>
            <Line data={dataChart} width={100} height={25} />
          </Container>
        </>
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
    return { props: { newData } };
  } else {
    return {
      props: {
        newData: [],
      },
    };
  }
};

export default Details;
