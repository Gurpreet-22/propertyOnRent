import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import Drawers from "../Component/Drawers";
import axios from "axios";

const MyCart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const getUser = localStorage.getItem("LoginDetail");
    const parsedUser = JSON.parse(getUser);
    setCartData(parsedUser);
    fetchCartData(parsedUser[0].user_id);
  }, []);

  const fetchCartData = async (user_id) => {
    try {
      const res = await axios.post("http://localhost:8000/api/hostelT_info", {
        user_id,
      });
      if (res.status === 200) {
        setCartData(res.data.data);
        console.log(res.data.data);
      } else {
        alert("Error fetching cart data");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Drawers />
      <Box p={3}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
          My Cart
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Username</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Hostel Name</strong></TableCell>
                <TableCell><strong>Address</strong></TableCell>
                <TableCell><strong>Room Type</strong></TableCell>
                <TableCell><strong>Amenities</strong></TableCell>
                <TableCell><strong>Price</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.username}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.hostel_name}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.room_type}</TableCell>
                  <TableCell>{item.amenities}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default MyCart;
