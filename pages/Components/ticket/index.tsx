import React, { useState } from "react";
import styles from "./style.module.css";
import Text from "../basic-element/text";
import { BLUE_COLOR } from "../../constants/colors";

const ImageLogo: React.FunctionComponent<{ logoUrl: string }> = ({
  logoUrl,
}) => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src={logoUrl} alt="" />
    </div>
  );
};

const TitleAndDescription: React.FunctionComponent<{
  title: string;
  subTitle: string;
}> = ({ title, subTitle }) => {
  let titleSubstring = title;
  let subTitleSubstring = subTitle;

  if (titleSubstring?.length > 20) {
    titleSubstring = titleSubstring.substring(0, 20) + "...";
  }

  if (subTitleSubstring?.length > 40) {
    subTitleSubstring = subTitleSubstring.substring(0, 40) + "...";
  }
  return (
    <div className={styles.textContainer}>
      <Text size={14} bold={true}>
        {titleSubstring}
      </Text>
      <div style={{ height: 4 }}></div>
      <Text size={14}>{subTitleSubstring}</Text>
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

const Ticket: React.FunctionComponent<{
  title: string;
  subTitle: string;
  logoUrl: string;
}> = ({ title, subTitle, logoUrl }) => {
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
        <ImageLogo logoUrl={logoUrl} />
        <TitleAndDescription title={title} subTitle={subTitle} />
        <SelectButton display={displaySelectButton} />
      </div>
    </div>
  );
};

export default Ticket;
