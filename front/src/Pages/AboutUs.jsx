import {  Grid2, Box,} from "@mui/material";
import React from "react";

import Label from "../Component/Label";

//import Navbar from "../Component/Navbar";

import DescriptionCard from "../Component/DescriptionCard";
import Navbar from "../Component/Navbar";


const AboutUs = () => {
  return (
    <>
  <Navbar/>
  <Grid2>
       
        
                <DescriptionCard/>
       
            
      </Grid2>
      <Box
        sx={{
          // position:"sticky",
          backgroundColor: "#1E1E24",
          padding: "20px",
          color: "white",
          textAlign: "center",
          marginTop: "5px",
        }}
      >
        <Label variant="body1"name="&copy; 2024 Your Company Name. All rights reserved"/>
        <Box  marginTop= {5} >
      <Label color="white" name="Privacy Policy"/>
          </Box>
          <Box marginTop={5}>
          <Label  color="white" name="Terms of Service"/>
        </Box>
      </Box>
    </>
  );
}
export default AboutUs;
