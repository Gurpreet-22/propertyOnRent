import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";

const CheckBoxComp = (props) => {
  return (
    <FormControl>
      <FormControlLabel
        label={props.label}
        name={props.name}
        control={<Checkbox />}
        sx={{
          "& .MuiTypography-root": { color: "white" }, // Label color
          "& .MuiSvgIcon-root": {
            border: "2px solid white",
          },
        }}
      />
    </FormControl>
  );
};

export default CheckBoxComp;
