import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Layout from "./Components/basic-element/layout";
import HomePage from "./homePage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traefik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default Home;
