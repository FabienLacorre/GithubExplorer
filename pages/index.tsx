import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "./Components/search-bar";
import Ticket from "./Components/ticket";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traefik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ width: 486, textAlign: "left" }}>
        <h1 style={{ fontWeight: "bold" }}>Select a repository</h1>

          <SearchBar />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </main>
    </div>
  );
};

export default Home;
