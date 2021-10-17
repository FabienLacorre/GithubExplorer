import * as React from "react";
import styles from "./style.module.css";

type Props = {
  children: any;
};

const Container: React.FunctionComponent<Props> = ({ children }) => {
  const style = {};
  return <div style={style}>{children}</div>;
};

export default Container;
