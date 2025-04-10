import {Card,CardMedia,Typography,Box, CardActionArea} from "@mui/material"
import React from 'react'




const DynamicCard = ({ title, image ,onClick,className,address}) => {

return(
  <>
  <Card
  sx={{
    position: "relative",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius:"20px",
    left:"80px",
    "&:hover": {
      transform: "scale(1.05)", // Slightly enlarge the card on hover
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Increased shadow on hover
    },
  }}
>
  {/* Image */}
  <CardActionArea onClick={onClick}>
  <CardMedia component="img" alt={title} image={image}  height="250" className={className} address={address}/>
  </CardActionArea>
{/*   
   <img src={image} alt={title} height="250"/>
    */}

    {/* Title Overlay */}
    <Box
      sx={{
        position: "absolute",
        top: "50%", // Center vertically
        left: "50%", // Center horizontally
        transform: "translate(-50%, -50%)", // Correct center positioning
        zIndex: 1, // Ensure the title is above the image
        color: "white", // Text color for visibility
        textAlign: "center", // Center align the text
        padding: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black background for contrast
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" fontWeight="bold" fontSize="20px"color="white">
{title}
      </Typography>
    </Box>
</Card>
 




</>
)}

export default DynamicCard
