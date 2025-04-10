import React, { useState } from "react";
import Label from "../Component/Label";
import { Box, Grid2 } from "@mui/material";
import "../App.css";
import Texts from "../Component/Texts";

import ButtonCom from "../Component/ButtonCom";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom"
import RadioBtn from "../Component/RadioBtn"


const Register = () => {


  const navigate=useNavigate();
const [details, setDetails] = useState({
    username: "",
    password: "",
    confirmPassword:"",
    email:"",
    address:"",
    landmark:"",
    city:"",
    pincode:"",
  gender:"",

  });

const [genderVal, setGenderVal]=useState("")
  
const [errors,setErrors]=useState({username:"",password:"",confirmPassword:"",email:"",address:"",landmark:"",
    
    city:"",
    pincode:"",gender:"",})

 

    const validation=()=>{
      const validpass=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      const validEmail=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
      const validAdress=/^[a-zA-Z0-9\s,.'-]{3,}$/
 const validMark=/^[a-zA-Z0-9\s,.'-]{3,50}$/
const validPin=/^[1-9][0-9]{5}$/

  
  const newError={}
  
  //username
  if(!details.username ) {
    newError.username="username is required "
  }
  else if(details.username.length<3){
    newError.username="username must be atleast 3 character"
  }else if(/\s/.test(details.username)){
    newError.username="space doesn't require"
  }
  
  
  // password
  if(!details.password ){
    newError.password="password is required"
  }
  else if(!validpass.test(details.password)){
    newError.password=" there must be one small character,one capital letter,special character and length should be atleast 6 "
  }
  
  //email
  if(!details.email){
    newError.email="email is required"
  }
  else if(!validEmail.test(details.email)){
    newError.email="invalid email syntax. email should contain alphanumeric string,exactly one @ and valid domain"
  }
  //address
  if(!details.address){
    newError.address="address is required"
  }
  else if(!validAdress.test(details.address)){
    newError.address="invalid address"
  }
  //landmark
  //address
  if(!details.landmark){
    newError.landmark="address is required"
  }
  else if(!validMark.test(details.landmark)){
    newError.landmark="invalid address"
  }
  //city
  if(!details.city) {
    newError.city="city is required "
  }
  else if(details.city.length<3){
    newError.city="city must be atleast 3 character"
  }else if(/\s/.test(details.city)){
    newError.city="space doesn't require"
  }
   //pincode
   if(!details.pincode){
    newError.pincode="pincode is required"
   }else if(details.pincode.length<6){
    newError.pincode="pincode must be atleast 6 digit"
   }else if(!validPin.test(details.pincode)){
    newError.pincode="space doesn't require in pincode"
   }
  // radiobtn

  if (!details.gender) {
  newError.gender="select any one "
};
  
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
    const handleOnChangeGender = (e) => {
       setGenderVal(e.target.value)
       
    details.gender=e.target.value;
    };
     
    
    const onSubmit = async () => {
     
     alert(JSON.stringify(details))
    //  let  username=details.pincode;
       if (validation()) {
        try {
          await 
            axios.post("https://propertyonrent-backend.onrender.com/api/register",details).then((res) => {  
            if (res.status === 200) {
             
            localStorage.setItem('details',JSON.stringify(details))
             setDetails(res.data.data)
              navigate("/Login")
     
          
            } else {
              alert("Login failed. Please try again.");
            }
          });
        } catch (err) {
          alert(err);
        }
        }
    };
  
  
  return (
    <Box className="body">
      <Grid2
        container
        className="frame"
        spacing={2}
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
              name="Register"
              variant="h5"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"white"}
            />
             <Box display="flex" width="100%" gap={4}>
            <Texts
              name="username"
              label="Username"
              margin="normal"
               
        error={!!errors.username}
              helperText={errors.username}
              value={details.username}
              onChange={handleOnChange}
          
            />
      <Texts
        name="email"
        label="Email"
        margin="normal"
    
    error={!!errors.email}
        helperText={errors.email}
        value={details.email}
        onChange={handleOnChange}
    
      />
      <Box display="inline-block" width="100%" gap={2}>
      <RadioBtn
      label="Gender"
     
      name="gender"
   
    row="true" sx={{color:"white"}}
      options={[
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ]}
      
      onChange={handleOnChangeGender}
     value={details.gender}
  error={!!errors.gender} // Pass error state
  helperText={errors.gender} 
    />  
    </Box>
            </Box>
            <Box display="flex" gap={2}>
            <Texts
              name="password"
              label="Password"
              margin="normal"
     fullWidth
              error={!!errors.password}
              helperText={errors.password}
              value={details.password}
              onChange={handleOnChange}
              
            />
              <Texts
              name="confirmPassword"
              label="Confirm Password"
              margin="normal"
             
          fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              value={details.confirmPassword}
              onChange={handleOnChange}
              
            />
             </Box>
            <Box display="flex" gap={2}>
            <Texts
              name="address"
              label="Address"
              margin="normal"
             
          fullWidth
              error={!!errors.address}
              helperText={errors.address}
              value={details.address}
              onChange={handleOnChange}
              
            />
            <Texts
              name="landmark"
              label="Landmark/Nearest Area"
              margin="normal"
             
          fullWidth
              error={!!errors.landmark}
              helperText={errors.landmark}
              value={details.landmark}
              onChange={handleOnChange}
              
            />
            </Box>
            <Box display="flex" gap={2}>
<Texts
              name="city"
              label="City"
              margin="normal"
             
          fullWidth
              error={!!errors.city}
              helperText={errors.city}
              value={details.city}
              onChange={handleOnChange}
              
            />
            <Texts
              name="pincode"
              label="Pincode"
              margin="normal"
             
          fullWidth
              error={!!errors.pincode}
              helperText={errors.pincode}
              value={details.pincode}
              onChange={handleOnChange}
              
            />
            </Box>
           
           
            <Box padding={2}color={"white"} backgroundColor="black">
            <ButtonCom
              type="submit"
              // name="Sign In"
              variant="text"
          color="white"
           label="Sign-up"
           fontWeight="Bold"
              onClick={onSubmit}  
              // disabled={!details.username || !details.password}
            />
            </Box>
            <Box display={'flex'} >
            <Label
                marginLeft={20}
                component={Link}
                to="/Login"
                color="white"
              name="Sign-In"
                fontWeight="bold"
                fontSize="20px"
              />
              </Box>
              <Box display={'flex'} margin={2}>
              <Label name="Terms & Condition" color="white"  marginLeft={15} />
              </Box>
            <Grid2 xs={12}>
              <Box className="eclipse2-contact " />
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default Register;
