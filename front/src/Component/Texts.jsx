import {  TextField } from "@mui/material";
import React from "react";


const Texts = (props,sx) => {
  return (
    <TextField
      name={props.name}
      label={props.label}
      variant={props.variant}
      width={props.width}
      margin={props.margin}
      onChange={props.onChange}
      value={props.value}
      error={props.error}
      slotProps={props.slotProps}
      helperText={props.helperText}
rows={props.rows}
borderColor={props.borderColor}
color={props.color}
type={props.type}
ref={props.ref}
textAlign={props.textAlign}
fullWidth
     marginLeft={props.marginLeft}
     padding={props.padding}
      
      
sx={{
  // Apply the default styles here for input, label, and border color
  "& .MuiInputBase-input": {
    color: "white", // Text color white
  },
  "& .MuiFormLabel-root": {
    color: "white", // Label color white
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", // Border color white
    },
    "&:hover fieldset": {
      borderColor: "white", // Hover border color white
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", // Focused border color white
    },
  },
  ...sx, // Allow custom styles to be passed through
}}
{...props} // Spread the rest of the props
    />
  );
};

export default Texts;
