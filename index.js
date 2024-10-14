const express = require("express");
const path = require("path");
const app = express();
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then((e) => console.log("MongoDb connected"));

const PORT = 8000;
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);
app.listen(PORT, () => console.log(` Server started at port ${PORT}`));
