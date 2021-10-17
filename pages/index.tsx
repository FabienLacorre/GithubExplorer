import { useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "./Components/search-bar";
import Ticket from "./Components/ticket";
import Text from "./Components/basic-element/text";
import Container from "./Components/basic-element/container";
import { GREY_COLOR } from "./constants/colors";
import Layout from "./Components/basic-element/layout";

const HomeContent: React.FunctionComponent<{}> = ({}) => {
  const [data, setData] = useState([1, 2, 3]);

  const fetchData = async () => {
    const req = await fetch(
      "https://randomuser.me/api/?gender=male&results=100"
    );
    const newData = await req.json();
    console.log("new", newData);
    setData(newData.results);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.main}>
      <div style={{ width: 486, textAlign: "left" }}>
        <button onClick={(e: any) => handleClick(e)}>TEST QUERY</button>
        <Container>
          <Text size={32} bold={true} color={GREY_COLOR}>
            Select a repository
          </Text>
        </Container>

        <Container>
          <SearchBar />
        </Container>
        <div>
          {data.map((e: any, index: number) => {
            return (
              <Container key={index + "tickets"}>
                <Ticket />
              </Container>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traefik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomeContent />
      </Layout>
    </div>
  );
};
export default Home;
