import {  Box} from "@mui/material";
import React,{useEffect} from "react";

import Label from "../Component/Label";
import CityCard from "../Component/CityCard";
// import ButtonCom from "../Component/ButtonCom";
import {useNavigate} from 'react-router-dom'
import Drawers from "../Component/Drawers";
const Dashboard = () => {
   const navigate=useNavigate();

  useEffect(() => {
    const loginInfo=localStorage.getItem("LoginDetail")
   //  const loginParse=JSON.parse(loginInfo)
     
    
    if (!loginInfo){
 navigate("/Login")
    }
   
     
   },[]);

  //  const cleardata= () =>{
  //   localStorage.clear()
  //   navigate("/")
  //  }
  return (
    <>
     
    <Drawers />
     
   <CityCard />    
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
export default Dashboard;
