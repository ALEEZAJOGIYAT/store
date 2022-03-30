const express = require("express");
const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: [true, "Select any one type of store"],
  },

  storeType: {
    type: String,
    required: [true, "Select any one type of store"],
  },
  productName: {
    type: String,
    required: [true, "Name of product is required"],
  },
  productImage: {
    type: String,
    // required: [true, "Add Image of Product as Sample"],
  },
  productDetails: {
    type: String,
    required: [true, "Description is required"],
  },
  productPrice: {
    type: Number,
    required: [true, "Mention the Price of Product"],
  },
  productQuantity: {
    type: Number,
    // min: 1,
    // max: 4,
  },
});

const storeModel = mongoose.model("store", StoreSchema);
module.exports = storeModel;
