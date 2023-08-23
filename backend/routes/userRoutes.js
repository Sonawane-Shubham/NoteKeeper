const express = require("express");
const {registerUser} = require("../controller/userControllers");
const router = express.Router();
                    //   controller
router.route("/").post(registerUser);

module.exports = router;