import React, { useState } from "react";
import Label from "../Component/Label";
import { Box, Grid2, IconButton, InputAdornment } from "@mui/material";
import "../App.css";
import Texts from "../Component/Texts";
import CheckBoxComp from "../Component/CheckBoxComp";
import ButtonCom from "../Component/ButtonCom";
import axios from "axios"
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate ,Link} from "react-router-dom";


const Login = () => {
const navigate=useNavigate()
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });
const[isvisible,setVisible]=useState(false)
  const [errors,setErrors]=useState({username:"",password:""})
  // const [rememberMe, setRememberMe] = useState(false); 

// const[loginInfo,setLoginInfo]=useState([])

  const validation=()=>{
    const validpass=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
const newError={}

//username
if(!details.username ) {
  newError.username="username is required "
}
else if(details.username.length<3){
  newError.username="username must be atleast 3 character"
}else if(/\s/.test(details.username)){
  newError.username="space doesn't require"
} if(!details.password ){
  newError.password="password is required"
}
else if(!validpass.test(details.password)){
  newError.password=" there must be one small character,one capital letter,special character and length should be atleast 6 "
}
// else if(rememberMe ==="false") {
// newError.rememberMe="Please check terms and conditions."
// }

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


  const clickHandler=()=>{

    setVisible(!isvisible);
  
  }
  const onSubmit = async (e) => {
    
    e.preventDefault();
    if (validation()) {
      try {
        
        await axios.post("https://propertyonrent-backend.onrender.com/registerData",details).then((res) => {
          if (res.status === 200) {
          if(res.data.data.length>0 ){
        
           localStorage.setItem('LoginDetail',JSON.stringify(res.data.data));
                   
                     navigate("/Dashboard") 
          }else{
            alert('data for found.')
          }
            // if(res.data.data.message==="Data successfully"){
            //   alert('login sucess')

            //   localStorage.setItem('LoginDetail',JSON.stringify(details));
           
            //     console.log(res.data)
                   
            //          navigate("/Dashboard") 
            // }

         
          } 
          else {
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
        spacing={3}
        height={"100vh"}
        width={"100vw"}
      >
        {/* eclipse */}
        <Grid2 xs={12}>
          <Box className="eclipse" />
        </Grid2>
        {/* HEADING */}
        <Grid2 xs={12} md={6}container justifyContent="center" alignItems="center">
          <Label
            name="Welcome Back"
            color={"white"}
            variant={"h1"}
            marginTop={5}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Box className="Login-Box" container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          flexDirection="column">
            <Label
              name="Login"
              variant="h5"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"white"}
            />
            <Texts
              name="username"
              label="Username"
              margin="normal"
             width="fullWidth"
        error={!!errors.username}
              helperText={errors.username}
              value={details.username}
              onChange={handleOnChange}
              slotProps={{
                input: {
                  endAdornment:
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="description for action"
                        
                        sx={{color:"white"}}
                      >
                       
                      <PersonIcon/>
                      </IconButton>
                    </InputAdornment>
                },
              }}
            />
            <Texts
              name="password"
              label="Password"
              type="password"
             
              margin="normal"
     fullWidth
              error={!!errors.password}
              helperText={errors.password}
              value={details.password}
              onChange={handleOnChange}
              slotProps={{
                input: {
                  endAdornment:
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="description for action"
                        onClick={clickHandler}
                        sx={{color:"white"}}
                      >
                       {isvisible ?<VisibilityIcon/>:<VisibilityOffIcon/>} 
                      </IconButton>
                    </InputAdornment>
                },
              }}
            />

<Box padding={2} color={"white"} backgroundColor="black">
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
            <CheckBoxComp label="Remember Me" name="Remember Me" />

           
            <Label
              name="Forgot Password?"
              textAlign="center"
              padding={1}
              color="white"
            />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
              marginTop={2}
            >
              <IconButton>
                <GoogleIcon sx={{ fontSize: "40px", color: "#ca7df9" }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ fontSize: "40px", color: "#ca7df9" }} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={{ fontSize: "40px", color: "#ca7df9" }} />
              </IconButton>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
              marginTop={2}
            >
              <Label
             component={Link}
                name="Don't have an account setup ?Sign Up "
               color="white"
              
               to="/Register"
             />          
              
             
             


              {/* <Typography color="white">
              Don't have an account setup ?
              <Typography color="white">
                Sign Up
              </Typography>
              </Typography> */}
            </Box>
            
           {/* <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
              marginTop={2}
            >
             <Label name="Terms & Condition" color="white" /> 
            </Box>*/}
            <Grid2 xs={12}>
              <Box className="eclipse2" />
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Login;
