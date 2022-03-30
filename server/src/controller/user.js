const userModel = require("../model/user");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const {
    cnicNo,
    firstName,
    lastName,
    email,
    address,
    phoneNo,
    password,
    role,
  } = req.body;

  const userExits = await userModel.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exits");
  }

  try {
    const user = new userModel({
      cnicNo: cnicNo,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      phoneNo: phoneNo,
      password: password,
      role: role,
    });

    await user.save();
    res.send("inserted");
    console.log("user aded", user);
  } catch (err) {
    console.log(err, "err");
  }
};

//JWT token certifies user identity and sends it to the client

//this function is for login /auth users after signing up they will login

const authUser = async (req, res) => {
  const { cnicNo, email, password, role } = req.body;

  const auth = await userModel.findOne({ email });

  if (auth && (await auth.matchPassword(password))) {
    res.send(auth)

    // res.json({
    //   _id: auth.id,
    //   cnicNo: auth.cnicNo,
    //   firstName: auth.firstName,
    //   lastName: auth.lastName,
    //   email: auth.email,
    //   address: auth.address,
    //   phoneNo: auth.phoneNo,
    //   role: auth.role,
    // });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
};


//get API
const Role = (req, res) => {
  userModel.find({}, (error, result) => {
    if (error) {
      res.send(error);
    }

    res.send(result);
  });
};

module.exports = { registerUser, authUser, Role };
