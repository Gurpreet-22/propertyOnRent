import { Box,Grid2 } from '@mui/material'

import React from 'react'
import img1 from "../images/img1.jpg"
import Brazil from "../images/Brazil.jpg"
import cuba3 from "../images/cuba3.jpg"
import DynamicCard from './DynamicCard'
import {useNavigate} from 'react-router-dom'
 

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
const CityCard = () => {
  const navigate=useNavigate();
  
  return (
    <Box  height={500} margin={10} component="form" encType="multipart/form-data" method="post">
    <Grid2 container spacing={3}>
      {cardData.map((item,id) => (
        <Grid2  xs={12} sm={4} md={4} key={id}>
            <DynamicCard title={item.title} image={item.image} onClick={() => navigate('../../HostelList', { state: { city_id: item.city_id } })} /> 
          
        </Grid2>
       )
       )} 
  
    </Grid2>
    </Box>
  
  )
}

export default CityCard
