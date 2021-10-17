import React, { useState } from "react";
import styles from "./style.module.css";
import Text from "../basic-element/text";
import { BLUE_COLOR } from "../../constants/colors";

const ImageLogo: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.logoContainer}>
      <img
        className={styles.logoImage}
        src="https://picsum.photos/200"
        alt=""
      />
    </div>
  );
};

const TitleAndDescription: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.textContainer}>
      <Text size={14} bold={true}>
        Traefik/mesh
      </Text>
      <Text size={14}>Traefik Mesh - SImpler Service Mesh</Text>
    </div>
  );
};

const SelectButton: React.FunctionComponent<{ display: boolean }> = ({
  display,
}) => {
  return (
    <div
      style={{ opacity: display == true ? 1 : 0 }}
      className={styles.selectButtonContainer}
    >
      <button className={styles.selectButton}>
        <Text size={14} bold={true} color={BLUE_COLOR}>
          Select
        </Text>
      </button>
    </div>
  );
};

const Ticket: React.FunctionComponent<{}> = () => {
  const [displaySelectButton, setDisplaySelectButton] = useState(false);

  return (
    <div
      className={styles.ticket}
      onMouseOver={() => {
        setDisplaySelectButton(true);
      }}
      onMouseLeave={() => {
        setDisplaySelectButton(false);
      }}
    >
      <div className={styles.container}>
        <ImageLogo />
        <TitleAndDescription />
        <SelectButton display={displaySelectButton} />
      </div>
    </div>
  );
};

export default Ticket;
