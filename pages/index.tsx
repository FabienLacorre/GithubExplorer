import { useState } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "./Components/search-bar";
import TicketContainer from "./Components/ticket/ticketContainer";
import Text from "./Components/basic-element/text";
import Container from "./Components/basic-element/container";
import { GREY_COLOR, LIGHT_GREY_COLOR } from "../constants/colors";
import Layout from "./Components/basic-element/layout";
import Button from "./Components/basic-element/button";

const Home: React.FunctionComponent<{ post: any }> = ({ post }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputContent, setInputContent] = useState("traefik/mesh");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const req = await fetch(
        `https://api.github.com/search/repositories?q=${inputContent}`
      );
      const newData = await req.json();
      setData(newData.items);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Traefik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.main}>
          {" "}
          <Container>
            <Text size={50} bold={true} color={GREY_COLOR}>
              GitHub Indicators Explorer
            </Text>
          </Container>
          <Container>
            <Text size={20} bold={false} color={LIGHT_GREY_COLOR}>
              GitHub Indicators Explorer can help you get key metrics about your
              favourite github reposititories.
            </Text>
          </Container>
          <div style={{ width: 486, textAlign: "left", marginTop: 60 }}>
            <Container>
              <Text size={32} bold={true} color={GREY_COLOR}>
                Select a repository
              </Text>
            </Container>
            <form>
              <Container>
                <Container>
                  <SearchBar
                    value={inputContent}
                    handlerChange={setInputContent}
                  />
                </Container>
                <Button
                  fullWidth={true}
                  clickHandler={(e: any) => handleClick(e)}
                >
                  {isLoading == true ? (
                    <span>Loading ...</span>
                  ) : (
                    <span> Search</span>
                  )}
                </Button>
              </Container>
              <TicketContainer
                visibility={data && data.length > 0}
                data={data}
              />
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch("https://api.github.com/users/FabienLacorre");
  const post = await res.json();

  return {
    props: { post },
  };
};

export default Home;
