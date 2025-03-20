const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt=require('jsonwebtoken')
const zod = require("zod");
const JWT_SCRET=require('../config')
const { User } = require("../db");
router.get("/", async (req, res) => {
  res.json({
    msg: "user end point from routes",
  });
});

const userzod = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});
router.post("/signup", async (req, res) => {
  const { safeBody } = userzod.safeParse(req.body);

  if (!safeBody) {
    res.json({
      msg: "incorrect input",
    });
  }

  const user = await User.findOne({ username: req.body.username });
  if (user._id) {
    res.json({
      msg: "user already exists",
    });
  }

  const details = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  const token=jwt.sign({id:details.id},JWT_SCRET)
  res.json({
    msg: "user sucessfully signedup",
    token:token
  });
});
module.exports = router;
