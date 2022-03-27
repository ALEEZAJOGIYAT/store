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

  const user = await userModel.create({
    cnicNo,
    firstName,
    lastName,
    email,
    address,
    phoneNo,
    password,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      cnincNo: user.cnicNo,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      phoneNo: user.phoneNo,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Page not found");
  }
};

//JWT token certifies user identity and sends it to the client

//this function is for login /auth users after signing up they will login

const authUser = async (req, res) => {
  const { cnicNo, email, password, role } = req.body;

  const auth = await userModel.findOne({ email });

  if (auth && (await auth.matchPassword(password))) {
    res.json({
      _id: auth.id,
      cnicNo: auth.cnicNo,
      firstName: auth.firstName,
      lastName: auth.lastName,
      email: auth.email,
      address: auth.address,
      phoneNo: auth.phoneNo,
      role: auth.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
};

module.exports = {registerUser,authUser};
