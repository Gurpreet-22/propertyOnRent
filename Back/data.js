const mysql = require("mysql2");

let db_con = mysql.createConnection({
  host: "your_host_name",
  user: "your_username",
  password: "your_password",
  database: "your_database_name",
});
db_con.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});

module.exports = db_con;
