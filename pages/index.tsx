import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "./Components/search-bar";
import Ticket from "./Components/ticket";
import Text from "./Components/basic-element/text";
import Container from "./Components/basic-element/container";
import { GREY_COLOR } from "./constants/colors";
import Layout from "./Components/basic-element/layout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traefik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.main}>
          <div style={{ width: 486, textAlign: "left" }}>
            <Container>
              <Text size={32} bold={true} color={GREY_COLOR}>
                Select a repository
              </Text>
            </Container>

            <Container>
              <SearchBar />
            </Container>

            <Container>
              <Ticket />
            </Container>

            <Container>
              <Ticket />
            </Container>

            <Container>
              <Ticket />
            </Container>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
