import {Box, Typography} from '@mui/material';
import React from'react'
import{useLocation} from "react-router-dom"

function Mypage() {
  const location=useLocation()
const  data  = location.state;
console.log(location.state)

  return (
    <Box>
     
      <Typography>Name: {data.name}</Typography>
      <Typography>Age: {data.age}</Typography> 
      Hello
    
    </Box>
  );
}
export default Mypage;