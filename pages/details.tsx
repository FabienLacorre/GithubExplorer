import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Text from "./Components/basic-element/text";
import Layout from "./Components/basic-element/layout";
import Container from "./Components/basic-element/container";
import { BLUE_COLOR, GREY_COLOR, LIGHT_GREY_COLOR } from "./constants/colors";
import Button from "./Components/basic-element/button";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const dateSetOne = {
  label: "Open issues",
  fill: false,
  lineTension: 0.1,
  backgroundColor: "rgba(75,192,192,0.4)",
  borderColor: "rgba(75,192,192,1)",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderColor: "rgba(75,192,192,1)",
  pointBackgroundColor: "#fff",
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: "rgba(75,192,192,1)",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data: [65, 59, 80, 81, 56, 55, 40],
};

const datasetsTwo = {
  label: "Collaborators",
  fill: false,
  lineTension: 0.1,
  backgroundColor: "red",
  borderColor: "red",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderColor: "red",
  pointBackgroundColor: "#fff",
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: "red",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data: [1, 2, 3, 74, 95, 100, 8],
};

const dataSetThree = {
  label: "Stars",
  fill: false,
  lineTension: 0.1,
  backgroundColor: "pink",
  borderColor: "pink",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderColor: "pink",
  pointBackgroundColor: "#fff",
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: "pink",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data: [32, 42, 74, 89, 59, 100, 43],
};

const Details: NextPage = () => {
  const data = {
    labels: labels,
    datasets: [dateSetOne, datasetsTwo, dataSetThree],
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
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
          <Line data={data} width={100} height={25} />
        </Container>
      </Layout>
    </div>
  );
};

export default Details;
