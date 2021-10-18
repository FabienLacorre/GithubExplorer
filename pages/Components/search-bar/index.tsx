import * as React from "react";
import { StyledSearchBar } from "./style";

const Ticket: React.FunctionComponent<{ handlerChange?: any; value?: string }> =
  ({ handlerChange, value }) => {
    const style = {};
    return (
      <StyledSearchBar
        value={value}
        onChange={(e) => handlerChange(e.target.value)}
        style={style}
        type="text"
        placeholder="Search ..."
      />
    );
  };

export default Ticket;
