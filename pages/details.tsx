import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Text from "./Components/basic-element/text";
import Layout from "./Components/basic-element/layout";
import Container from "./Components/basic-element/container";
import { BLUE_COLOR, GREY_COLOR, LIGHT_GREY_COLOR } from "./constants/colors";
import Button from "./Components/basic-element/button";
import { Line } from "react-chartjs-2";

const Details: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <DetailContent />
      </Layout>
    </div>
  );
};

const DetailContent: React.FunctionComponent<{}> = ({}) => {
  const [data, setData] = useState([]);
  const [xValues, setXValues] = useState([]);
  const [issuesValues, setIssuesValues] = useState([]);

  useEffect(() => {
    async function fetch() {
      await fetchData();
    }
    fetch();
  }, []);

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

  const options = {
    since: {
      date: "2020-01-01",
      time: "00:00:00",
    },
  };

  const formatDataIssues = (commits: any) => {
    const tmpXValues: any = [];
    commits.forEach((e: any, index: number) => {
      let indexTable = tmpXValues.findIndex(
        (tmpXValue: any) => tmpXValue.date === e?.updated_at?.substring(0, 7)
      );
      if (indexTable == -1) {
        tmpXValues.push({ date: e?.updated_at?.substring(0, 7), number: 1 });
      } else {
        tmpXValues[indexTable].number = tmpXValues[indexTable].number + 1;
      }
    });
    const tmpDate: any = [];
    const tmpValues: any = [];
    tmpXValues.forEach((e: any) => {
      tmpDate.push(e.date);
      tmpValues.push(e.number);
    });
    setXValues(tmpDate.reverse());
    setIssuesValues(tmpValues.reverse());
  };

  const fetchData = async () => {
    const username = "traefik";
    const repo = "mesh";
    try {
      const req = await fetch(
        `https://api.github.com/repos/${username}/${repo}/issues?state=open&per_page=100&since=${options["since"]["date"]}T${options["since"]["time"]}Z&sort=updated`
      );
      const newData = await req.json();
      setData(newData);
      formatDataIssues(newData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Text size={16} bold={true} color={BLUE_COLOR}>
          Choose another repository
        </Text>
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
        <Button>Open issues</Button>
        <Button>Collaborators</Button>
        <Button>Stars</Button>
      </Container>

      <Container>
        <Line data={dataChart} width={100} height={25} />
      </Container>
    </>
  );
};

export default Details;
