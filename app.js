const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(cookieParser()); // for parsing cookies
app.use(express.json()); //for parsing rquest body
mongoose.connect(
  "mongodb://127.0.0.1:27017/ecommerce",
  { useNewUrlParser: true },
  () => {
    console.log("connected to database");
  }
);



const userRouter = require("./routes/User");

app.use("/user", userRouter);


app.listen(5000, () => {
  console.log("express server started");
});
