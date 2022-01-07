const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Item = require("../models/Item");
const { response } = require("express");
const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "server1",
      sub: userID,
    },
    "abcdef123",
    { expiresIn: "1h" }
  );
};

userRouter.post("/register", (req, res) => {
  const { username, password } = req.body;
  User.find({ username }, (err, user) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Error has occured",
          msgError: true,
        },
      });
    if (user.length > 0) {
      res.status(400).json({
        message: {
          msgBody: "Username already exists",
          msgError: true,
        },
      });
    } else {
      const newUser = new User({
        username,
        password,
        role: "admin",
      });
      newUser.save((err) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: {
              msgBody: "Error has occured",
              msgError: true,
            },
          });
        } else {
          res.status(201).json({
            message: {
              msgBody: "account successfully created",
              msgError: false,
            },
          });
        }
      });
    }
  });
});
userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username, role, cart } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res
        .status(200)
        .json({ isAuthenticated: true, user: { username, role, cart } });
    }
  }
);
userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "", role: "", cart: [], success: true } });
  }
);
userRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { username } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username } });
  }
);
userRouter.get("/products", async (req, res) => {
  let products = await Item.find();
  //console.log(products);
  res.json({ products });
});
userRouter.post("/veiwed",async (req,res)=>{
  
})


module.exports = userRouter;
