import * as React from "react";
import styles from "./style.module.css";

const Ticket: React.FunctionComponent<{ handlerChange?: any; value?: string }> =
  ({ handlerChange, value }) => {
    const style = {
      height: "36px",
      width: "100%",
      borderRadius: "21.5px",
      border: "1px solid #D7D7D7",
      paddingLeft: "18px",
    };
    return (
      <input
        value={value}
        onChange={(e) => handlerChange(e.target.value)}
        style={style}
        type="text"
        placeholder="Search ..."
      />
    );
  };

export default Ticket;
