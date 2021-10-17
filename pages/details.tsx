import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Text from "./Components/basic-element/text";
import Layout from "./Components/basic-element/layout";
import Container from "./Components/basic-element/container";
import { BLUE_COLOR, GREY_COLOR, LIGHT_GREY_COLOR } from "./constants/colors";

const Details: NextPage = () => {
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
      </Layout>
    </div>
  );
};

export default Details;
