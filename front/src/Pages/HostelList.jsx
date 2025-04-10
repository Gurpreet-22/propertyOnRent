import React, { useState, useEffect } from 'react';
import { Grid2, Box, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonCom from '../Component/ButtonCom';
import Label from '../Component/Label';
import Drawers from '../Component/Drawers';

const HostelList = () => {
  const [pgDetail, setPgDetail] = useState([]);
 
  const location = useLocation();
  const navigate = useNavigate();
  const city_id = location.state.city_id;
  

// const cleardata = () =>{
//   localStorage.clear();
// }
  
  useEffect(() => {
   const loginInfo=localStorage.getItem("LoginDetail")
  //  const loginParse=JSON.parse(loginInfo)
    
   
   if (loginInfo===null){
navigate("/Login")
   }
  // else if(!cityid) {
  //     alert("City ID not provided.");
  //     return;
  //   }

    const fetchPgDetails = async () => {
      // let cityid=1;
      try {
        const response = await axios.post("https://propertyonrent-backend.onrender.com/api/pgDataInfo",{city_id});
        setPgDetail(response.data.data);
        console.log(response.data.data);
        console.log(pgDetail);
       } catch (error) {
        alert(error.message);
      }
    };

    fetchPgDetails();
  }, []);

  return (
    <>
      <Drawers/>
    <Box height={500} margin={10}>
      <Grid2 container spacing={5}>
        {pgDetail.map((item) => (
          <Grid2 item xs={12} md={6} key={item.id}>
            <Card style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Image section */}
              <CardMedia
                component="img"
                image={require(`../images/${item.photos}`)} // Make sure the image path is correct
                alt="Hostel"
                width="150"
                height="250"
               
              />
              {/* Card Content section */}
              <CardContent>
                <Box xs={12} display={"flex"} width={500} marginBottom={1}>
              <Label name={`${item.hostel_name}`} color="black" fontWeight="bold"
              sx={{fontStyle:"cursive"}} variant="body" marginTop={1} />
              </Box>
                {/* Hostel Address */}
                <Label name={`Address:  ${item.address}`} color="black" variant="body" marginTop={1} />
                
                {/* Contact Info */}
                <Box marginTop={1}>
                  <Label name={`Contact:  ${item.contact_info}`} color="black" variant="body" />
                </Box>
                
                {/* Amenities */}
                <Box xs={12} marginTop={2} display="flex"justifyContent="space-between" alignItems="center">
                  {/* <Label name={`Amenities:  ${item.amenities}`} color="black" variant="body" /> */}
              

                {/* Submit Button */}
                {/* <Box marginTop={2} width={2} alignItems={"right"} display={"flex"} justifyContent={'left'}> */}
                  <ButtonCom
                    type="submit"
                    variant="contained"
                    label="Explore"
                   width="2px"
                   
                    onClick={() => navigate('/RoomsDetail', { state: { hostel_id: item.hostel_id } })}
                    
                   
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
    </>
  );
};

export default HostelList;
