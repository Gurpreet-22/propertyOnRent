import React from 'react'
import { AppBar,Container,Toolbar ,Button,Box} from '@mui/material';
import {Link} from "react-router-dom"
const navArray = ["Home", "About Us","Contact Us","Register"];
const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1E1E24" }}>
    <Container maxWidth="xl">
      <Toolbar>
        <Box
          sx={{
            display: { md: "flex", xs: "flex" },
            gap: 2,
            justifyContent: "flex-end",
          }}
          width="100%"
        >
          {navArray.map((cur, index) => (
            <Button  component={Link} key={index}    to={cur.toLowerCase().replace(/\s+/g, '') === 'home' ? '/' : `/${cur.toLowerCase().replace(/\s+/g, '')}`} color="white">
              {cur}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar
