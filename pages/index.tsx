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
import Button from "./Components/basic-element/button";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
        {/* TITLE HEADER */}
        <Container>
          <Text size={32} bold={true} color={GREY_COLOR}>
            Select a repository
          </Text>
        </Container>

        {/* INPUT + FORM SEACH BUTTON */}
        <form>
          <Container>
            <Container>
              <SearchBar value={inputContent} handlerChange={setInputContent} />
            </Container>
            <Button fullWidth={true} clickHandler={(e: any) => handleClick(e)}>
              Search
            </Button>
          </Container>
        </form>

        {/* FETCHED DATAS */}
        <div className={styles.ticketContainer}>
          {data && data.length > 0
            ? data.map((e: any, index: number) => {
                return (
                  <Container key={index + "tickets"}>
                    <Ticket
                      handlerRedirection={() => {
                        router.push({
                          pathname: "/details",
                          query: { repo: "test" },
                        });
                      }}
                      title={e?.full_name}
                      subTitle={e?.description}
                      logoUrl={e?.owner.avatar_url}
                    />
                  </Container>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
