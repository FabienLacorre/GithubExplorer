import * as React from "react";
import SearchBar from "./Components/search-bar";
import Ticket from "./Components/ticket";
import Text from "./Components/basic-element/text";
import Container from "./Components/basic-element/container";
import { GREY_COLOR } from "./constants/colors";
import styles from "../styles/Home.module.css";

type Props = {};

const HomePage: React.FunctionComponent<Props> = ({ children }) => {
  return (
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
  );
};

export default HomePage;
