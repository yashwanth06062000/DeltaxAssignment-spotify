const express = require("express");
const AddingartistsController = require("../Controllers/AddingartistsController.js");

const router = express.Router();

router.post("/addsong", AddingartistsController.AddArtist);


module.exports = router;