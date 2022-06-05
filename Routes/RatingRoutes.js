const express = require("express");
const router = express.Router();


const RatingController=require("../Controllers/RatingControllers")

router.post("/Addrating",RatingController.addrating)






module.exports = router;