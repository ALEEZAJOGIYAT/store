const express=require("express")
const {registerUser,authUser}=require("../controller/user")


const router=express.Router()


// const app =express()


router.route('/add').post(registerUser)

router.route('/login').post(authUser)



module.exports=router