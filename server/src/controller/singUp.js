const userModel=require('../model/user')
const bcrypt=require('bcrypt')

const signUp= async(req,res)=>{
  const userData=new userModel({
    cnincNo:req.body.cnicNo ,
    firstName:req.body.firstName ,
    lastName: req.body.lastName,
    email:req.body.email,
    address: req.body.password,
    phoneNo: req.body.phoneNo,
    password:req.body.password,
    role:req.body.role
  })
  try {
    await userData.save();
    res.send("data is inserted");
  } catch (err) {
    console.log(err);
  }

}

module.exports=signUp