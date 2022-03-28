const express = require("express");
const { registerUser, authUser,Role } = require("../controller/user");

const router = express.Router();

// const app =express()

router.route("/add").post(registerUser);

router.route("/login").post(authUser);
router.route("/role").get(Role)

module.exports = router;
