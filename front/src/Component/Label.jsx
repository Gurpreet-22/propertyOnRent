import { Typography } from "@mui/material";
import React from "react";

const Label = (props) => {
  return (
    <Typography
      variant={props.variant}
      color={props.color}
      marginTop={props.marginTop}
      marginLeft={props.marginLeft}
      left={props.left}
      fontWeight={props.fontWeight}
      textAlign={props.textAlign}
      padding={props.padding}
      fontSize={props.fontSize}
      display={props.display}
    component={props.component}
    to={props.to}
underline={props.underline}
top={props.top}
textDecoration={props.textDecoration}

     
    >
      {props.name}
    </Typography>
  );
};

export default Label;
