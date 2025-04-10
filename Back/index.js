const express = require("express");
const cors = require("cors");
const crudop = require("./newRouter/CrudOp");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use("/api", crudop);

//middleware or plugin
// app.use("/", (req, res) => {
//   console.log("hello");
//   res.send("hello");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
