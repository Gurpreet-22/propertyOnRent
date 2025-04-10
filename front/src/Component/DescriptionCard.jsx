import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material';
import React from 'react';
import hostel1 from '../images/hostel1.jpg';

const DescriptionCard = () => {
  return (
    <Box margin={5} display="flex" flexDirection="column" alignItems="center">
      {/* Animated Image Section */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '90%', sm: '80%', md: '70%' },
          maxWidth: 1200,
          height: { xs: 250, md: 300 },
          overflow: 'hidden',
          borderRadius: '8px',
          
        }}
      >
        <CardMedia
          component="img"
          image={hostel1}
          alt="Hostel"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Content Section */}
      <Box marginTop={5} width="90%">
        <Card
          sx={{
            padding: 3,
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            maxWidth: 1200,
            width: { xs: '100%', sm: '100%', md: '100%' },
            
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontSize: '1.5rem',
                color: '#555',
                textAlign: 'justify',
                fontStyle: 'oblique',
                marginBottom: 2,
              }}
            >
              Hostels and PGs (paying guest accommodations) provide affordable and convenient living options for students and working professionals.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontSize: '1.5rem',
                color: '#555',
                textAlign: 'justify',
                fontStyle: 'oblique',
              }}
            >
              They offer shared or private rooms with essential amenities like meals, Wi-Fi, and housekeeping. These accommodations foster community living, reduce living costs, and ensure proximity to workplaces or educational institutions, enhancing convenience and productivity.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DescriptionCard;
