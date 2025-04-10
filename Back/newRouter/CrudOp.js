const express = require("express");
const router = express.Router();
const db_con = require("../data"); // Import the actual MySQL connection object

router.post("/pgData", async (req, res) => {
  try {
    const {
      hostel_id,
      city_id,
      hostel_name,
      address,
      contact_info,
      amenities,
      photos,
      checkInTime,
      checkOutTime,
    } = req.body;

    // Perform the database query to insert data into the hostel_info table
    db_con.query(
      "INSERT INTO hostel_info(hostel_id,hostel_name, address, contact_info, amenities, photos, checkInTime, checkOutTime, city_id) VALUES ( ?,?, ?, ?, ?, ?, ?, ?,?)",
      [
        hostel_id,
        city_id,
        hostel_name,
        address,
        contact_info,
        amenities,
        photos,
        checkInTime,
        checkOutTime,
      ],
      (err, result) => {
        if (err) {
          console.log("Error:", err); // Log the error for debugging
          return res.status(500).json({
            message: "Failed to insert data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: "Data inserted successfully",
          result: result,
        });
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/pgDataInfo", async (req, res) => {
  console.log("datacheck");
  try {
    const city_id = req.body.city_id;
    console.log(city_id);
    const query = "SELECT * FROM hostel_info where city_id=?";
    db_con.query(
      query,
      [city_id],

      (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res.status(500).json({
            message: "Failed to retrieve data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: "Data fetched successfully",
          data: result,
        });
        console.log(result);
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/roomdataInfo", async (req, res) => {
  try {
    const hostel_id = req.body.hostel_id;
    console.log("roomdataInfo");
    console.log(hostel_id);
    const query = "SELECT * FROM room_info where hostel_id=?";
    db_con.query(query, [hostel_id], (err, result) => {
      if (err) {
        console.log("Error:", err);
        return res.status(500).json({
          message: "Failed to retrieve data",
          error: err.message,
        });
      }

      res.status(200).json({
        message: "Data fetched successfully",
        data: result,
      });
      console.log(result);
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/roomData", async (req, res) => {
  try {
    const {
      room_id,
      hostel_id,
      room_number,
      createdAt,
      updatedAt,
      room_img,
      bath_img,
      mess_img,
      amenities,
      price,
      room_type,
    } = req.body;

    // Perform the database query to insert data into the hostel_info table
    db_con.query(
      "INSERT INTO room_info(room_id,room_number,hostel_id,createdAt,updatedAt,room_img,bath_img,mess_img,amenities,price,room_type) VALUES (?,?,?, ?, ?, ?, ?, ?, ?, ?,?)",
      [
        room_id,
        hostel_id,
        room_number,
        createdAt,
        updatedAt,
        room_img,
        bath_img,
        mess_img,
        amenities,
        price,
        room_type,
      ],
      (err, result) => {
        if (err) {
          console.log("Error:", err); // Log the error for debugging
          return res.status(500).json({
            message: "Failed to insert data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: "Data inserted successfully",
          result: result,
        });
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

// router.post("/roomDataInfo", async (req, res) => {
//   console.log("roomdata");
//   try {
//     const hostel_id = req.body.hostel_id;
//     console.log(hostel_id);
//     const query = "SELECT * FROM room_info where hostel_id=?";
//     db_con.query(
//       query,
//       [hostel_id],

//       (err, result) => {
//         if (err) {
//           console.log("Error:", err);
//           return res.status(500).json({
//             message: "Failed to retrieve data",
//             error: err.message,
//           });
//         }

//         res.status(200).json({
//           message: "Data fetched successfully",
//           data: result,
//         });
//         console.log(result);
//       }
//     );
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
// router.post("/hostelTransc", async (req, res) => {
//   try {
//     const { hostelTrans_id, hostel_id, room_id, user_id, amount, createdDate } =
//       req.body;

//     // Perform the database query to insert data into the hostel_info table
//     db_con.query(
//       "INSERT INTO hosteltransaction(hostelTrans_id,hostel_id,room_id,user_id,amount,createdDate) VALUES (?, ?, ?, ?,?,?)",
//       [hostelTrans_id, hostel_id, room_id, user_id, amount, createdDate],
//       (err, result) => {
//         if (err) {
//           console.log("Error:", err); // Log the error for debugging
//           return res.status(500).json({
//             message: "Failed to insert data",
//             error: err.message,
//           });
//         }

//         res.status(200).json({
//           message: "Data inserted successfully",
//           data: result,
//         });
//       }
//     );
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
router.post("/hostelT_info", async (req, res) => {
  console.log("rommdatacheck");
  try {
    const user_id = req.body.user_id;
    console.log(user_id);
    const query =
      " SELECT hostel_info.hostel_name,hostel_info.address, room_info.amenities,      room_info.room_type," +
      " register_info.username,register_info.email,hosteltransaction.amount,hosteltransaction.createdDate" +
      " FROM hosteltransaction " +
      " INNER JOIN hostel_info ON hosteltransaction.hostel_id = hostel_info.hostel_id " +
      " INNER JOIN room_info ON hostel_info.hostel_id = room_info.hostel_id " +
      " INNER JOIN register_info ON hosteltransaction.user_id = register_info.user_id " +
      "WHERE hosteltransaction.user_id=?";

    db_con.query(query, [user_id], (err, result) => {
      if (err) {
        console.log("Error:", err);
        return res.status(500).json({
          message: "Failed to retrieve data",
          error: err.message,
        });
      }

      res.status(200).json({
        message: "Data fetched successfully",
        data: result,
      });
      console.log(result);
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});
// router.post("/loginData", async (req, res) => {
//   // try {
//   //   const { username, password } = req.body;
//   //   console.log(req.body);
//   //   db_con.query(
//   //     "SELECT * FROM login_info WHERE username=? and password=?",
//   //     [username, password],
//   //     (err, result) => {
//   //       if (err) {
//   //         console.log("Error:", err);
//   //         return res.status(500).json({
//   //           message: "Failed to retrieve data",
//   //           error: err.message,
//   //         });
//   //       }
//   //       res.status(200).json({
//   //         message: "Data   successfully",
//   //         data: result,
//   //       });
//   //     }
//   //   );
//   // } catch (error) {
//   //   console.log("Error:", error);
//   //   res.status(500).json({
//   //     message: error.message,
//   //   });
//   // }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Perform the database query to insert data into the hostel_info table
//     db_con.query(
//       "INSERT INTO login_info(username,password) VALUES (?, ?)",
//       [username, password],
//       (err, result) => {
//         if (err) {
//           console.log("Error:", err); // Log the error for debugging
//           return res.status(500).json({
//             message: "Failed to insert data",
//             error: err.message,
//           });
//         }

//         res.status(200).json({
//           message: "Data inserted successfully",
//           result: result,
//         });
//       }
//     );
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
router.post("/register", async (req, res) => {
  const entry_date = new Date().toISOString();
  const curdate = entry_date.substring(0, entry_date.indexOf("T"));
  try {
    const {
      username,
      password,
      address,
      email,
      gender,
      landmark,
      city,
      pincode,
      entry_date,
    } = req.body;
    console.log(req.body);
    // Perform the database query to insert data into the hostel_info table
    db_con.query(
      "INSERT INTO registeration_info(username,password,address,email,gender,landmark,city, pincode,entry_date) VALUES (?,?, ?,?, ?,?,?,?,?)",
      [
        username,
        password,
        address,
        email,
        gender,
        landmark,
        city,
        pincode,
        curdate,
      ],
      (err, result) => {
        if (err) {
          console.log("Error:", err); // Log the error for debugging
          return res.status(500).json({
            message: "Failed to insert data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: "Data inserted successfully",
          data: result,
        });
        console.log(result);
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/myProfile", async (req, res) => {
  try {
    const username = req.body.uname;

    console.log(req.body.username);
    const query = "SELECT * FROM registeration_info where username=?";
    db_con.query(query, [username], (err, result) => {
      if (err) {
        console.log("Error:", err);
        return res.status(500).json({
          message: "Failed to retrieve data",
          error: err.message,
        });
      }

      res.status(200).json({
        message: "Data fetched successfully",
        data: result,
      });
      console.log(result);
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

// router.post("/registerData", (req, res) => {
//   try {
//     const { username, password, email } = req.body;
//     console.log(req.body);
//     db_con.query(
//       "SELECT * FROM register_info WHERE username=? and password=?and email=?",
//       [username, password, email],
//       (err, result) => {
//         if (err) {
//           console.log("Error:", err);
//           return res.status(500).json({
//             message: "Failed to retrieve data",
//             error: err.message,
//           });
//         }

//         res.status(200).json({
//           message: "Data   successfully",
//           data: result,
//         });
//       }
//     );
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
router.post("/registerData", async (req, res) => {
  try {
    const { username, password } = req.body;

    db_con.query(
      "SELECT * FROM registeration_info WHERE username=? and password=?",
      [username, password],
      (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res.status(500).json({
            message: "Failed to retrieve data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: res.message,
          data: result,
        });
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/leads", async (req, res) => {
  const entry_date = new Date().toISOString();
  const curdate = entry_date.substring(0, entry_date.indexOf("T"));

  try {
    const { name, email, message, entry_date } = req.body;

    // Perform the database query to insert data into the hostel_info table
    db_con.query(
      "INSERT INTO leads(name,email,message,entry_date) VALUES (?, ?, ?,?)",
      [name, email, message, curdate],
      (err, result) => {
        if (err) {
          console.log("Error:", err); // Log the error for debugging
          return res.status(500).json({
            message: "Failed to insert data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: "Data inserted successfully",
          result: result,
        });
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/search", async (req, res) => {
  try {
    const { location, property_type, price } = req.body;
    console.log(req.body.property_type);

    db_con.query(
      "SELECT * FROM search1 WHERE location=? and property_type=? and price=?  ",
      [location, property_type, price],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "data doesn't exists123",
            error: err.message,
          });
        }

        res.status(200).json({
          data: result,
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
