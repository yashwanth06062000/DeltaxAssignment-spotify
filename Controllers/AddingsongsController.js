const Songs = require("../Models/Songs.js");
const Artists = require("../Models/Artists");
const SongsartistsTable = require("../Models/artistsongs");
const { range } = require("express/lib/request");

exports.AddSong = (req, res) => {
  const songname = req.body.songname.toLowerCase();
  const dateofrelease = req.body.dor;
  const coverimage = req.body.coverimage;
  const avgrating = 0;
  const totalratings = 0;
  const artists = req.body.artists;
  var existingsong = undefined;
  var songid = undefined;
  Songs.findAll({ where: { songname: songname } }).then((res) => {
    existingsong = res[0];
  });
  if (existingsong == undefined) {
    Songs.create({
      songname: songname,
      dateofrelease: dateofrelease,
      coverimage: coverimage,
      avgrating: avgrating,
      totalratings: totalratings,
    }).then(() => {
      Songs.findAll({ where: { songname: songname } }).then((res) => {
        songid = res[0].id;
      });

      for (let i = 0; i < artists.length; i++) {
        Artists.findAll({ where: { artistname: artists[i].artistname } }).then(
          (res) => {
            const artistid = res[0].id;
            SongsartistsTable.create({ ArtistId: artistid, SongId: songid });
          }
        );
      }
      res.json({ message: "Song Added Successfully", Success: true });
    });
  } else {
    res.json({ message: "Song Already Available", Success: true });
  }
};
