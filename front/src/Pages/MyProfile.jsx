import React, { useEffect, useState } from "react";
import Label from "../Component/Label";
import { Box, Grid2, IconButton } from "@mui/material";
import "../App.css";
import PersonIcon from "@mui/icons-material/Person";
import Drawers from "../Component/Drawers";
import axios from "axios";

const MyProfile = () => {
 const [profileData,setProfileData]=useState([])
 

  useEffect(()=>{
    const getUser=localStorage.getItem("LoginDetail")
    setProfileData(JSON.parse(getUser))
     
  }, []);

    
  return (
    <>
    <Drawers/>
    <Box className="body">
      <Grid2
        container
        className="frame"
        spacing={3}
        height={"100vh"}
        width={"100vw"}
      >
        <Grid2 xs={12}>
          <Box className="eclipse-profile" />
        </Grid2>

        <Grid2 xs={12} md={8}>
          <Box
            className="Profile-Box"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Label
                name="MyProfile"
                variant="h5"
                fontWeight={"bold"}
                textAlign={"center"}
                color={"white"}
              />
            </Box>
            <IconButton
              sx={{
                color: "white",
                marginTop: "1rem",
              }}
            >
              <PersonIcon sx={{ fontSize: "5rem" }} />
            </IconButton>
            <Box sx={{ marginTop: "2rem", width: "100%" }}>
              <Grid2 container spacing={2}>
                {/* Each Label is now in its own row */}
                {profileData.map((item,index)=>(
<>
                  <Box xs={12} display={"flex"} width={500}>
                  <Label
                name="username :"
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                  marginLeft={2}
                   />
                   <Label
                name={item.username}
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                   marginLeft={19}
                     />
                </Box>
                <Box display={"flex"} width={500} >
                  <Label
                    name="email :"
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                    marginLeft={2}
                   
                  />
                  
                  <Label
                    name={item.email}
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                   marginLeft={23}
                  />
                </Box>
               
                <Box display={"flex"} width={500}>
                  <Label
                    name="address :"
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                  marginLeft={2}
                  />
                  <Label
                    name={item.address}
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                    marginLeft={21}
                  />
                </Box>
                <Grid2 xs={12} flexDirection={"row"}>
                  <Label
                    name="landmark/nearest area :"
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                    marginLeft={2}
                  />
                   <Label
                    name={item.landmark}
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                  marginLeft={8}
                  />
                </Grid2>
                <Box xs={12} display={"flex"} width={500}>
                  <Label
                    name="city :"
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                 marginLeft={2}
                    />
                    <Label
                    name={item.city}
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                   marginLeft={25}
                    />
                </Box>
                <Box xs={12} display={"flex"} width={500}>
                  <Label
                    name="pincode :"
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                   marginLeft={2}
                    />
                     <Label
                    name={item.pincode}
                    variant="body"
                    color={"white"}
                    textAlign={"left"}
                   marginLeft={21}
                    />
                </Box>
                </>
                   ))}
              </Grid2>
            </Box>
          </Box>
             
        </Grid2>
      </Grid2>
    </Box>
    </>
  );
};

export default MyProfile;
