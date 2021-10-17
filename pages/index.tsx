import { useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "./Components/search-bar";
import TicketContainer from "./Components/ticket/ticketContainer";
import Text from "./Components/basic-element/text";
import Container from "./Components/basic-element/container";
import { GREY_COLOR } from "./constants/colors";
import Layout from "./Components/basic-element/layout";
import Button from "./Components/basic-element/button";

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

const HomeContent: React.FunctionComponent<{}> = ({}) => {
  const [data, setData] = useState([]);
  const [inputContent, setInputContent] = useState("traefik/mesh");

  const fetchData = async () => {
    try {
      const req = await fetch(
        `https://api.github.com/search/repositories?q=${inputContent}`
      );
      const newData = await req.json();
      console.log(newData);
      setData(newData.items);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.main}>
      <div style={{ width: 486, textAlign: "left" }}>
        <Container>
          <Text size={32} bold={true} color={GREY_COLOR}>
            Select a repository
          </Text>
        </Container>
        <form>
          <Container>
            <Container>
              <SearchBar value={inputContent} handlerChange={setInputContent} />
            </Container>
            <Button fullWidth={true} clickHandler={(e: any) => handleClick(e)}>
              Search
            </Button>
          </Container>
          <TicketContainer data={data} />
        </form>
      </div>
    </div>
  );
};

export default Home;
