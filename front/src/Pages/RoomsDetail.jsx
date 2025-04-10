import React, { useState,useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

// Material-UI Components
import { Card, CardContent, Box } from "@mui/material";
import ButtonCom from "../Component/ButtonCom";
import Label from "../Component/Label";
import Drawers from "../Component/Drawers";
// import Drawers from "../Component/Drawers";

const RoomsDetail = () => {
  const location = useLocation();
  const [slidesData, setSlidesData] = useState([]);
  const hostel_id = location.state.hostel_id;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const fetchRoomDetails = async () => {
     
      try {
        const response = await axios.post("http://localhost:8000/api/roomdataInfo",{hostel_id});
        setSlidesData(response.data.data);
        console.log(response.data.data)
        console.log(slidesData)
      } catch (error) {
        alert(error.message);
      }
    };
    fetchRoomDetails();
  }, []);


  return (
    <>
    <Drawers/>
    <Box 
      display="flex" 
      
      alignItems="flex-start" 
      flexDirection="column" 
      gap={3}
    
      minHeight="100vh"  // Ensure that the content takes up at least the full height of the screen
    >
       {slidesData.map((item, index) => (
        <Card 
          key={index} 
         
           
          style={{ 
            width: "600px", // You can adjust the width as needed
            margin: "20px auto", 
            display:"flex" , 
            justifyContent:"flex-start" // Auto margin ensures it is centered
          }}
        >
          <Swiper
            className="mySwiper"
            spaceBetween={30}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            style={{
              width: "500px",
              height: "300px",
            }}
          >
            <SwiperSlide>
              <img
                src={require(`../images/${item.room_img}`)}
                alt="Room"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`../images/${item.bath_img}`)}
                alt="Bathroom"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`../images/${item.mess_img}`)}
                alt="Mess"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          </Swiper>

          {/* Room Details */}
          <CardContent>
            <Box  marginTop={2}>
            <Label  name={`Room Type: ${item.room_type}`} color={"black"} variant={"body"} />
            </Box>
            <Box marginTop={2}>
              <Label name={`Amenities: ${item.amenities}`} color={"black"} variant={"body"} />
            </Box>
            <Box marginTop={2}>
              <Label name={`Price: ₹${item.price} per night`} color={"black"} variant={"body"} />
            </Box>

            {/* Book Now Button */}
            <Box marginTop={10}>
              <ButtonCom 
                type={"submit"} 
                variant={"contained"} 
                label="Book Now" 
                onClick={() => navigate('/Card')}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                }} 
              />
            </Box>
          </CardContent>
        </Card>
      ))} 
    </Box> 
    </>
  );
};

export default RoomsDetail;
