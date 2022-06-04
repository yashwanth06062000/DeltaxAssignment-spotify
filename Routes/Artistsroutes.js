const express = require("express");
const ArtistsController = require("../Controllers/ArtistsControllers")

const router = express.Router();

router.post("/addartists",ArtistsController.Addartist);
router.get("/getartists",ArtistsController.getartists);

module.exports = router;
