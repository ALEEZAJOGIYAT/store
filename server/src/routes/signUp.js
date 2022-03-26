
const express=require("express")
const signUpController=require("../controller/singUp")
const router=express.Router()


// const app =express()



router.post("/add",signUpController)



module.exports=router