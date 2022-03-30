const express = require("express");
const { registerUser, authUser, Role } = require("../controller/user");
const {store,storeData} =require("../controller/store")

const router = express.Router();

// const app =express()

router.route("/add").post(registerUser);

router.route("/login").post(authUser);
router.route("/role").get(Role);


router.route("/storedata").post(store)
router.route("/storedata").get(storeData)


module.exports = router;
