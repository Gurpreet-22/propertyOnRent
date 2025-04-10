import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtonsGroup = (props) => {
  return (
    <FormControl>
      
      <FormLabel>{props.label}</FormLabel>
      <RadioGroup
        
        onChange={props.onChange} // Pass onChange handler if needed
        name={props.groupName} 
        row={props.row}
        value={props.value}
        
      >
        {props.options?.map((option, index) => (
          <FormControlLabel
            key={option.index}
            value={option.value}
            control={<Radio />}
            label={option.label}
            
          
            sx={{
              "& .MuiRadio-root": {
                color: "white", // Default color
              },
              "& .Mui-checked": {
                color: "#ca7df9", // Checked color
              },
              "& .MuiFormControlLabel-label": { color: "white" }, // Label color
            }}
          />
        ))}
        
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
