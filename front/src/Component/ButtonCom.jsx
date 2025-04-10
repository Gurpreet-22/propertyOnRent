import { Button } from "@mui/material";
import React from "react";

const ButtonCom = (props) => {
  return (
    <Button
      type={props.type}
      variant={props.variant}
     width={props.width}
    fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      onClick={props.onClick}
      padding={props.padding}
  backgroundColor={props.backgroundColor}
  
   color={props.color}
     
      // sx={{
     
        //"& .MuiButton-root": { color: "black" },
      //   "& .MuiOutlinedInput-root": {
      //     "& fieldset": {
      //       borderColor: "white",
      //     },
      //   },
      style={{
        backgroundColor:"black",
        color:"white"
      }}
    
    >
      {props.label}
    </Button>
  );
};

export default ButtonCom;
