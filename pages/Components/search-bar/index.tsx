import * as React from "react";
import styles from "./style.module.css";

const Ticket: React.FunctionComponent<{}> = () => {
  return (
    <input
      className={styles.inputCustom}
      type="text"
      placeholder="Search ..."
    />
  );
};

export default Ticket;
