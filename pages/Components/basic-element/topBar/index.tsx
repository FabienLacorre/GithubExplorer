import * as React from "react";
import {
  BLUE_COLOR,
  WHITE_COLOR,
  VERY_LIGHT_GREY_COLOR,
} from "../../../../constants/colors";
import Button from "../button";
import Text from "../text";
type Props = {};

const TopBar: React.FunctionComponent<Props> = ({}) => {
  const style = {
    width: "100%",
    height: 80,
    backgroundColor: BLUE_COLOR,
    display: "flex",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      <Text size={16} bold={true} color={WHITE_COLOR}>
        GitHub Indicators Explorer
      </Text>
      <Button
        backgroundColor={WHITE_COLOR}
        color={BLUE_COLOR}
        backgroundColorHover={VERY_LIGHT_GREY_COLOR}
        colorHover={BLUE_COLOR}
      >
        Swap theme
      </Button>
    </div>
  );
};

export default TopBar;
