const express = require("express");
const publiccontroller = require("../Controllers/publicControllers.js");

const router = express.Router();

router.post("/signup", publiccontroller.usersignup);
router.post("/login", publiccontroller.login);

module.exports = router;
