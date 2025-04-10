import React, { useState } from "react";
import Label from "../Component/Label";
import { Box, Grid2 } from "@mui/material";
import "../App.css";
import Texts from "../Component/Texts";

import ButtonCom from "../Component/ButtonCom";
import axios from "axios";
import Navbar from "../Component/Navbar";




const ContactUs = () => {


  const [details, setDetails] = useState({
    name: "",
    email: "",
    message:"",
  });

  const [errors,setErrors]=useState({name:"",email:"",message:""})
 

   const validation=()=>{
  const validEmail=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
const newError={}

//username
if(!details.name ) {
  newError.name="name is required "
}
else if(details.name.length<3){
  newError.name="username must be atleast 3 character"
}else if(/\s/.test(details.name)){
  newError.name="space doesn't require"
}


 if(!details.email ){
  newError.email="email is required"
}else if(!validEmail.test(details.email)){
  newError.email="invalid email syntax. email should contain alphanumeric string,exactly one @ and valid domain"
}



 if(!details.message){
   newError.message="message is required"
}



  setErrors(newError)
  return Object.keys(newError).length===0;

  }
  
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
    
      try {
        
        await axios.post("http://localhost:8000/api/leads",details).then((res) => {
          if (res.status === 200) {
           alert("message sent successfully");

         
          } else {
            alert("failed to send message");
          }
        });
      } catch (err) {
        alert(err);
      }
      }
    
  
  }
  
  return (
    <>
    <Navbar/>
    <Box className="body">
      <Grid2
        container
        className="frame"
        spacing={3}
        height={"100vh"}
        width={"100vw"}
      >
       
        <Grid2 xs={12}>
          <Box className="eclipse-contact" />
        </Grid2>
        
        <Grid2 xs={12} md={8} >
          <Box className="Contact-Box" container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          flexDirection="column">
            <Label
              name="CONTACT US"
              variant="h5"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"white"}
            />
            <Texts
              name="name"
              label="Name"
              margin="normal"
             width="fullWidth"
        error={!!errors.name}
              helperText={errors.name}
              value={details.name}
              onChange={handleOnChange}
             
            />
            <Texts
              name="email"
              label="Email"
              margin="normal"
     fullWidth
              error={!!errors.email}
              helperText={errors.email}
              value={details.email}
              onChange={handleOnChange}
              
            />
              <Texts
              name="message"
              label="Message"
              margin="normal"
              rows="4"
          fullWidth
              error={!!errors.message}
              helperText={errors.message}
              value={details.message}
              onChange={handleOnChange}
              
            />

            
           
            <Box padding={2}color={"white"} backgroundColor="black">
            <ButtonCom
              type="submit"
              // name="Sign In"
              variant="text"
          color="white"
           label="Submit"
           fontWeight="Bold"
              onClick={onSubmit}  
              // disabled={!details.username || !details.password}
            />
             
            </Box>
           
            <Grid2 xs={12}>
              <Box className="eclipse2-contact " />
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
    </>
  );
};

export default ContactUs;
