import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// Material-UI Components
import { Card, CardContent, Box, CardMedia } from "@mui/material";
import ButtonCom from "../Component/ButtonCom";
import Label from "../Component/Label";


const CarouselsDemo1 = () => {
  const [pgDetail, setPgDetail] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const cityid = location.state.city_id;

  console.log(cityid)
  useEffect(() => {
    const fetchPgDetails=async()=>{
      try{
        
        const response= await axios.get(`http://localhost:8000/api/pgData/${cityid}`)
  
          setPgDetail(response.data.data);
          console.log(response.data.data);
    }
  
      catch(error){
          alert(error.message)
  }
}; 

fetchPgDetails();
},[cityid])


  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={3}>
      {pgDetail.map((item) => (
        <Card key={item.id} style={{ width: "500px", margin: "10px auto" }}>
        
          <CardMedia
            key={item.id}
            image={require(`../images/${item.photos}`)} 
            alt="hostel image"
            width="200"
            height="300"
            onClick={() => navigate('/RoomsDetail', { state: { hostelid: item.hostelid } })}
          />
          {/* Card Content */}
          <CardContent>
            {/* Hostel Address */}
            <Label name={`Address: ${item.address}`} color="black" variant="body" marginTop={1} />
            
            {/* Contact Info */}
            <Box marginTop={1}>
              <Label name={`Contact: ${item.contact_info}`} color="black" variant="body" />
            </Box>
            
            {/* Amenities */}
            <Box marginTop={1}>
              <Label name={`Amenities: ${item.Amenities}`} color="black" variant="body" />
            </Box>

            {/* Submit Button */}
            <Box marginTop={2}>
              <ButtonCom
                type="submit"
                variant="contained"
                label="Submit"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#1976d2",
                  color: "white",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CarouselsDemo1;
