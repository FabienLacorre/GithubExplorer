import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Text from "./Components/basic-element/text";
import Layout from "./Components/basic-element/layout";
import Container from "./Components/basic-element/container";
import { BLUE_COLOR, GREY_COLOR, LIGHT_GREY_COLOR } from "./constants/colors";
import { Line } from "react-chartjs-2";
import Button from "./Components/basic-element/button";
import { useRouter } from "next/router";

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
  const [date, setDate] = useState("2020-01-01");
  const [xValues, setXValues] = useState([]);
  const [issuesValues, setIssuesValues] = useState([]);
  const router = useRouter();
  const options = {
    since: {
      date,
      time: "00:00:00",
    },
  };
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
    async function fetch() {
      await fetchData();
    }
    fetch();
  }, []);

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
        <div
        style={{cursor: "pointer"}}
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
        <Button clickHandler={fetchData}>Change date</Button>
        <input
          style={{
            height: 40,
            paddingLeft: 8,
            borderRadius: 8,
            border: `1px solid ${BLUE_COLOR}`,
          }}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
          type="date"
        />
      </Container>

      <Container>
        <Line data={dataChart} width={100} height={25} />
      </Container>
    </>
  );
};

export default Details;
