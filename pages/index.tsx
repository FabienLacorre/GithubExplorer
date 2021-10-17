import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "./Components/search-bar";
import Ticket from "./Components/ticket";
import CustomText from "./Components/UI-elements/custom-text";
import { GREY_COLOR } from "./constants/colors";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traefik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ width: 486, textAlign: "left" }}>
          <CustomText size={32} bold={true} color={GREY_COLOR}>
            Select a repository
          </CustomText>

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
