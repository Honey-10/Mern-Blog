const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcryptjs");
const User = require("../models/userschema");

// router.get("/", (req, res) => {
//   res.send("hello router");
// });

//register
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "fill all the fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password don't match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json(user);
    }
  } catch (err) {
    res.send(err);
  }
});
//register end

//login begin

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "field not filled" });
    }
    const userlogin = await User.findOne({ email: email });
    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      tokengen = await userlogin.generateAuthToken();
      res.cookie("jwtoken", tokengen, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "pass invaild" });
      } else {
        res.status(200).json({ message: "login successfully" });
      }
    } else {
      res.status(400).json({ error: "email invaild" });
    }

    //   res.status(400).json({ error: "email invaild" });
    // }
    // const userpass = await User.findOne({ password: password });
    // if (!userpass) {
    //   res.status(400).json({ error: "pass not found" });
    // } else {
    //   res.json({ message: "sign up successfully" });
    // }
  } catch (err) {
    console.log(err);
  }
});

//login end
router.get("/register", async (req, res) => {
  try {
    // const _id = req.params.id;
    const mensid = await User.find({});
    res.send(mensid);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
