const storeModel = require("../model/store");
// const {cloudinary} =require('../utils/cloudinary')


const store = async (req, res) => {
  const { storeName, storeType, productName, productPrice, productDetails,productImage } =
    req.body;

  // const userExits = await userModel.find();
  try {
    const store = new storeModel({
      storeName: storeName,
      storeType: storeType,
      productName: productName,
      productPrice: productPrice,
      productDetails: productDetails,
      productImage:productImage,
    });

    await store.save();
    res.send(store);
    console.log("store aded", store);
  } catch (err) {
    console.log(err, "err");
  }
};

//GET API

const storeData = async (req, res) => {
  storeModel.find({}, (error, result) => {
    if (error) {
      res.send(error);
    }

    res.send(result);
  });
};

module.exports = { store,storeData };
