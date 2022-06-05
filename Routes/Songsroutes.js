const express = require("express");
const AddingsongsController = require("../Controllers/SongsController.js");

const router = express.Router();

router.post("/addsong", AddingsongsController.AddSong);
router.get("/getsongs", AddingsongsController.GetSongs);


module.exports = router;