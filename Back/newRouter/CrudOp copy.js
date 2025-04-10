const express = require("express");
const router = express.Router();
const db_con = require("../data"); // Import the actual MySQL connection object

router.post("/pgData", async (req, res) => {
  try {
    const {
      hostelid,
      address,
      contact_info,
      amenities,
      photos,
      checkInTime,
      checkOutTime,
      city_id,
    } = req.body;

    // Perform the database query to insert data into the hostel_info table
    db_con.query(
      "INSERT INTO hostel_info(hostelid, address, contact_info, amenities, photos, checkInTime, checkOutTime, city_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        hostelid,
        address,
        contact_info,
        amenities,
        photos,
        checkInTime,
        checkOutTime,
        city_id,
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

router.get("/pgData", async (req, res) => {
  console.log("pgdatachecck");
  try {
    db_con.query("SELECT * FROM hostel_info", (err, result) => {
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
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/pgData/:city_id", async (req, res) => {
  console.log("pgdtaidcheck");
  try {
    const { city_id } = req.params;
    db_con.query(
      `SELECT * FROM hostel_info where city_id=${city_id} `,
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
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/roomdataInfo/:hostelid", async (req, res) => {
  try {
    const { hostelid } = req.params;
    db_con.query(
      `SELECT * FROM room_info where hostelid=${hostelid} `,
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
      }
    );
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
      hostelid,
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
      "INSERT INTO room_info(hostelid,createdAt,updatedAt,room_img,bath_img,mess_img,amenities,price,room_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)",
      [
        hostelid,
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

// router.get("/roomData", async (req, res) => {
//   try {
//     db_con.query("SELECT * FROM room_info", (err, result) => {
//       if (err) {
//         console.log("Error:", err);
//         return res.status(500).json({
//           message: "Failed to retrieve data",
//           error: err.message,
//         });
//       }

//       res.status(200).json({
//         message: "Data fetched successfully",
//         data: result,
//       });
//     });
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
router.get("/roomData", async (req, res) => {
  console.log("rommdatacheck");
  try {
    const hostelid = req.body.hostelid;

    db_con.query(
      `SELECT * FROM room_info WHERE hostelid=${hostelid}`,
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
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});
router.post("/hostelTransc", async (req, res) => {
  try {
    const { hostelTrans_id, hostelid, room_id, Amount, CreatedDate } = req.body;

    // Perform the database query to insert data into the hostel_info table
    db_con.query(
      "INSERT INTO hosteltransaction(hostelTrans_id,hostelid,room_id,Amount,CreatedDate) VALUES (?, ?, ?, ?,?)",
      [hostelTrans_id, hostelid, room_id, Amount, CreatedDate],
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
router.get("/hostelT_info", async (req, res) => {
  console.log("rommdatacheck");
  try {
    const hostelTrans_id = req.body.hostelTrans_id;

    db_con.query(
      `SELECT * FROM hosteltransaction WHERE hostelTrans_id=${hostelTrans_id}`,
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
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/loginData", async (req, res) => {
  try {
    const { username } = req.body;
    console.log(req.body.username);
    db_con.query(
      "SELECT * FROM login_info WHERE username=? ",
      [username],
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
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Perform the database query to insert data into the hostel_info table
    db_con.query(
      "INSERT INTO login_info(username,password) VALUES (?, ?)",
      [username, password],
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
router.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Perform the database query to insert data into the hostel_info table
    db_con.query(
      "INSERT INTO register_info(username,password,email) VALUES (?, ?,?)",
      [username, password, email],
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
router.get("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    db_con.query(
      "SELECT * FROM register_info WHERE username=? and password=? and email=?",
      [username, password, email],
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
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;
