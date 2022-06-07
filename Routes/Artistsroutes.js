const express = require("express");
const ArtistsController = require("../Controllers/ArtistsControllers")

const router = express.Router();

router.post("/addartists",ArtistsController.Addartist);
router.get("/getartists",ArtistsController.getartists);
router.get("/getsongartists",ArtistsController.getsongartists)
router.get("/gettop10artists",ArtistsController.gettop10artists)

module.exports = router;
