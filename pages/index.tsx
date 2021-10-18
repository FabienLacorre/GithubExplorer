import { useState, useEffect, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import SearchBar from "./Components/search-bar";
import TicketContainer from "./Components/ticket/ticketContainer";
import Text from "./Components/basic-element/text";
import Container from "./Components/basic-element/container";
import Layout from "./Components/basic-element/layout";
import Button from "./Components/basic-element/button";
import { StyledContainer, StyledMain } from "../styles/style";
import { RequestRepositories } from "../request";
import { useTheme, selectCorrectTheme } from "../hooks/context";

const Home: NextPage<{}> = ({}) => {
  const [data, setData] = useState([]);
  const { theme } = useTheme();
  const [textInButton, setTextInButton] = useState("Search");
  const [isLoading, setIsLoading] = useState(false);
  const [inputContent, setInputContent] = useState("traefik/mesh");
  const [errorButton, setErrorButton] = useState("");
  const CURRENT_THEME = selectCorrectTheme(theme);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setTextInButton("Loading...");
      const { response, error } = await RequestRepositories(inputContent);
      if (error != "") {
        setErrorButton(error);
      }
      setData(response?.items);
      setIsLoading(false);
      setTextInButton("Search again ?");
    } catch (err) {
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
    <StyledContainer>
      <Head>
        <title>Traefik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <StyledMain>
          <Container>
            <Text size={50} bold={true} color={CURRENT_THEME.GREY_COLOR}>
              GitHub Indicators Explorer
            </Text>
          </Container>
          <Container>
            <Text size={20} bold={false} color={CURRENT_THEME.LIGHT_GREY_COLOR}>
              GitHub Indicators Explorer can help you get key metrics about your
              favourite github reposititories.
            </Text>
          </Container>
          <div style={{ width: 486, textAlign: "left", marginTop: 60 }}>
            <Container>
              <Text size={32} bold={true} color={CURRENT_THEME.GREY_COLOR}>
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
                  error={errorButton}
                  backgroundColor={CURRENT_THEME.BLUE_COLOR}
                  backgroundColorHover={CURRENT_THEME.DARK_BLUE_COLOR}
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
        </StyledMain>
      </Layout>
    </StyledContainer>
  );
};

export default Home;
