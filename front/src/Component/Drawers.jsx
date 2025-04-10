import {
  List,
  ListItem,
  Drawer,
  ListItemText,
  Toolbar,
  IconButton,
  ListItemIcon,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Label from "./Label";


const Drawers = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle drawer open/close
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Clear localStorage and navigate
  const cleardata = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <AppBar position="sticky "sx={{backgroundColor:"black"}}>
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle} // Toggle drawer on menu click
          >
            <MenuIcon />
          </IconButton>
          {/* Navbar Title */}
          <Label variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Navbar
          </Label>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        open={open} // Open or close the drawer based on state
        onClose={handleDrawerToggle} 
        PaperProps={{
          sx: { backgroundColor: "#000000", color: "white" }, // Set drawer background to black and text to white

        }}
       >
        
        <List>
          {/* List Items */}
          <ListItem component={Link} to="/" sx={{ cursor: "pointer",color:"white"}}>
            <ListItemIcon>
              <HomeIcon sx={{ cursor: "pointer", color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem component={Link} to="/MyCart"sx={{ cursor: "pointer", color: "white" }}>
            <ListItemIcon>
              <ShoppingCartIcon sx={{ cursor: "pointer", color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="My Cart" />
          </ListItem>

          

          <ListItem component={Link} to="/MyProfile" sx={{ cursor: "pointer", color: "white" }}>
            <ListItemIcon>
              <AccountCircleIcon sx={{ cursor: "pointer", color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="MyProfile" />
          </ListItem>

          <ListItem button onClick={cleardata} sx={{ cursor: "pointer", color: "white" }}>
            <ListItemIcon>
              <LogoutIcon sx={{ cursor: "pointer", color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Drawers;
