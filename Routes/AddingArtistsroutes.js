const express = require("express");
const AddingsongsController = require("../Controllers/AddingsongsController.js");

const router = express.Router();

router.post("/addsong", AddingsongsController.AddSong);


module.exports = router;