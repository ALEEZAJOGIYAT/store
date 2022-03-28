// const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  cnicNo: {
    type: Number,
    required: true,
    // min:13,
    // max:13
  },
  firstName: {
    type: String,
    required: true,
    min: 5,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    min: 5,
    max: 20,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    min: 5,
    max: 20,
  },
  address: {
    type: String,
    required: true,
    min: 5,
    max: 20,
  },
  phoneNo: {
    type: String,
    required: true,
    // min: 11,
    // max: 11,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: [true, "role is required"],
  },
});

//pre means previous before saving
//this.modified is mongoose function which checks whether it is modified or not
//this is for encrypting password

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//this is for decrypting/matching password

UserSchema.methods.matchPassword = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password);
};

const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;
