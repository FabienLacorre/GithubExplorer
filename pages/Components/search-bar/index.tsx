import * as React from "react";
import styles from "./style.module.css";

const Ticket: React.FunctionComponent<{}> = () => {
  console.log(styles);
  return (
    <input
      className={styles.inputCustom}
      type="text"
      placeholder="Search ..."
    />
  );
};

export default Ticket;
