import {  Grid2, Box,  IconButton, Select, InputLabel, FormControl, MenuItem} from "@mui/material";
import React,{ useEffect, useState } from "react";
import house from "../images/house.jpg";
import Label from "../Component/Label";
import ButtonCom from "../Component/ButtonCom";
// import Texts from "../Component/Texts";
// import SearchIcon from '@mui/icons-material/Search';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import InputAdornment from "@mui/material/InputAdornment";
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import Navbar from "../Component/Navbar";
import img1 from "../images/img1.jpg"
import Brazil from "../images/Brazil.jpg"
import cuba3 from "../images/cuba3.jpg"
import DynamicCard from "../Component/DynamicCard";
import {useNavigate} from 'react-router-dom'
import Navbar from "../Component/Navbar";
import axios from "axios";

const Home = () => {
  const navigate=useNavigate();
  const [homedata,setHomeData]=useState([])
  
  const [location, setLocation] = useState("");
  const [property_type, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  
  
  
  

  useEffect(()=>{
    const fetchHome=async()=>{
try{
const res=await axios.post("http://localhost:8000/api/search",{location,property_type,price})
setHomeData(res.data.data)
}catch(error){
  console.log(error)
}
    }
    fetchHome();
  },[])
  const cardData = [
    {
      city_id: 1,
      title: "Delhi ",
      image: img1,// Use australia directly as the imported image URL
      
    },
    {
      city_id: 2,
      title: "Jaipur",
      image: Brazil,
      
    },
    {
      city_id: 3,
      title: "Kota",
      image: cuba3,
     
    },
  ];
  return (
    <>
 <Navbar />
  <Grid2>
        <Box
          height={500}
          margin={10}
          position="relative"
          overflow={"hidden"}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          borderRadius={5}
        >
          {/* Background Blur Box */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#ebedf0", // Light grey background
              filter: "blur(10px)", // Apply blur effect
              zIndex: 0, // Make sure it stays behind everything else
            }}
          />

          {/* Image */}
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={house}
              alt="House"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            {/* Light overlay to darken the image */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.4)", // Darker overlay for better contrast
                zIndex: 1, // Ensure overlay stays behind text
              }}
            />

            {/* Text/Label */}
            <Box
              position="absolute"
              top="20%" // Vertically center
              left="20px" // Add space from the left
              zIndex="2" // Ensure text is above everything
              color="white" // Text color for better visibility
              textAlign="left" // Align text to the left
              paddingLeft="15px" // Padding from the left side
              transform="translateY(-50%)" // Adjust vertical position
              width="100%" // Full width to make the text responsive
              px={2} // Padding for small screens
            >
              <Label
                variant="h3"
                fontWeight="bold"
                fontSize={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                display="block"
                name="Experience Better Living"
              />
              <Label
                variant="h3"
                fontWeight="bold"
                fontSize={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                display="block"
                name=" in Every Lease."
              />
            </Box>
            <Box
              position="absolute"
              top="50%" // Place buttons near the bottom of the box
              left="40px"
              zIndex="2"
              color="white"
              textAlign="left"

              // Ensure full width for responsiveness
            >
              <Box
                display="flex"
                justifyContent="flex-start" // Center on small screens, left-align on larger
                gap={2}
              >
                <ButtonCom
                  label="Buy"
                  variant="outlined" // Transparent background with border
                />
                <ButtonCom label="Rent" variant="outlined" />
                <ButtonCom label="Sell" variant="outlined" />
              </Box>
            </Box>
            <Box 
              
                position= "absolute"
                bottom="10%" // Place box 10% from the bottom
                left= "80px"// Align it from the left side
                zIndex={3} // Ensure it's on top of the image and buttons
                width={"80%"}
                backgroundColor= "rgba(255, 255, 255, 0.5)" // Semi-transparent black background
                borderRadius= "8px"
                padding= "5px" // Add some padding inside the box
                color="white"
                textAlign= "center"
              
            >

                <Box
                display="flex"
                justifyContent="flex-start" // Center on small screens, left-align on larger
                gap={0.5}
                >

               <>

               <FormControl fullWidth>
                    <InputLabel>Location</InputLabel>
                    <Select value={location} onChange={(e) => setLocation(e.target.value)}>
                      {homedata.map((item, index) => (
                        <MenuItem key={index} value={item.location}>
                          {item.location}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Property Type</InputLabel>
                    <Select value={property_type} onChange={(e) => setPropertyType(e.target.value)}>
                      {homedata.map((item, index) => (
                        <MenuItem key={index} value={item.property_type}>
                          {item.property_type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Price Range</InputLabel>
                    <Select value={price} onChange={(e) => setPrice(e.target.value)}>
                      {homedata.map((item, index) => (
                        <MenuItem key={index} value={item.price}>
                          {item.price}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
</>


              </Box>
            </Box>
          </Box>
          
        </Box>
        
               
        <Box  fullWidth margin={10}>
          <Grid2 container spacing={2.5}  justifyContent="center" alignItems="center">
           
              <Grid2  xs={12} sm={4} md={4} >
              <Label
                variant="h3"
                fontWeight="bold"
                fontSize={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                display="block"
                name="We are available"
                textAlign="center"
              />
              <Label
                variant="h3"
                fontWeight="bold"
                fontSize={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                display="block"
                name=" in many cities."
                textAlign="center"
              />
              </Grid2>
          
          </Grid2>
        </Box>
        <Box  height={500} margin={10} component="form" encType="multipart/form-data" method="post">
    <Grid2 container spacing={3}>
      {cardData.map((item,id) => (
        <Grid2  xs={12} sm={4} md={4} key={id}>
            <DynamicCard title={item.title} image={item.image} onClick={() => navigate('../../Dashboard', { state: { city_id: item.city_id } })} /> 
          
        </Grid2>
       )
       )} 
  
    </Grid2>
    </Box>    
            
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
export default Home;
