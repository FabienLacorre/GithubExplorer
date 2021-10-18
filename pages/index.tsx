import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "./Components/search-bar";
import TicketContainer from "./Components/ticket/ticketContainer";
import Text from "./Components/basic-element/text";
import Container from "./Components/basic-element/container";
import {
  GREY_COLOR,
  LIGHT_GREY_COLOR,
  BLUE_COLOR,
  DARK_BLUE_COLOR,
  RED_ERROR_COLOR,
  DARK_RED_ERROR_COLOR,
} from "../constants/colors";
import Layout from "./Components/basic-element/layout";
import Button from "./Components/basic-element/button";

const Home: NextPage<{}> = ({}) => {
  const [data, setData] = useState([]);
  const [textInButton, setTextInButton] = useState("Search");
  const [isLoading, setIsLoading] = useState(false);
  const [colorButton, setColorButton] = useState(BLUE_COLOR);
  const [hoverColorButton, setHoverColorButton] = useState(DARK_BLUE_COLOR);
  const [inputContent, setInputContent] = useState("traefik/mesh");

  const fetchData = async () => {
    try {
      setColorButton(BLUE_COLOR);
      setHoverColorButton(DARK_BLUE_COLOR);
      setIsLoading(true);
      setTextInButton("Loading...");
      const req = await fetch(
        `https://api.github.com/search/repositories?q=${inputContent}`
      );
      if (req.status == 200) {
        setTextInButton("Search");
      }
      if (req.status == 403) {
        setTextInButton("Too mutch requests... please retry later");
        setColorButton(RED_ERROR_COLOR);
        setHoverColorButton(DARK_RED_ERROR_COLOR);
      }
      if (req.status == 404) {
        setTextInButton("Not found");
        setColorButton(RED_ERROR_COLOR);
        setHoverColorButton(DARK_RED_ERROR_COLOR);
      }
      const newData = await req.json();
      if (newData?.items?.length == 0) {
        setTextInButton("Sorry, no results for your query");
        setColorButton(RED_ERROR_COLOR);
        setHoverColorButton(DARK_RED_ERROR_COLOR);
      }
      setData(newData?.items);
      setIsLoading(false);
    } catch (err) {
      setColorButton(RED_ERROR_COLOR);
      setHoverColorButton(DARK_RED_ERROR_COLOR);
      setTextInButton("Error please retry later");
      setIsLoading(false);
      console.log("err", err);
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
                  backgroundColor={colorButton}
                  backgroundColorHover={hoverColorButton}
                  disabled={isLoading}
                  fullWidth={true}
                  clickHandler={(e: any) => handleClick(e)}
                >
                  {textInButton}
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

export default Home;
