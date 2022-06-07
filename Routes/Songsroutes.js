const express = require("express");
const songsController = require("../Controllers/SongsController.js");

const router = express.Router();

router.post("/addsong", songsController.AddSong);
router.get("/getsongs", songsController.GetSongs);
router.get("/gettop10songs",songsController.gettop10songs)


module.exports = router;