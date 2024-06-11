const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const mongoose = require("mongoose");
let url = require("./url");

let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(url, { dbName: "newdb" }).then(
  () => {
    console.log("Connection success");
  },
  (err) => {
    console.log("connection failed" + err);
  }
);

app.use("/", productRoutes);

let port = 8080;
app.listen(port, () => {
  console.log("Server listening port no:- ", port);
});
