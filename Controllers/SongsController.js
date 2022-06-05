const Songs = require("../Models/Songs.js");
const Artists = require("../Models/Artists");
const SongsartistsTable = require("../Models/artistsongs");


exports.AddSong = async (req, res) => {
  const songname = req.body.songname.toLowerCase();
  const dateofrelease = req.body.dor;
  const coverimage = req.body.cover;
  const avgrating = 0;
  const totalratings = 0;
  const artists = req.body.artists;
  var existingsong = undefined;
  var songid = undefined;
 await Songs.findAll({ where: { songname: songname } }).then((res2) => {
    existingsong = res2[0];
  });
  if (existingsong == undefined) {
    await Songs.create({
      songname: songname,
      dateofrelease: dateofrelease,
      coverimage: coverimage,
      avgrating: avgrating,
      totalratings: totalratings,
    });
    await Songs.findAll({ where: { songname: songname } }).then((res1) => {
      songid = res1[0].id;
      artists.forEach(async (arti) => {
        await Artists.findAll({ where: { artistname: arti } }).then(
          (result) => {
            const artistid = result[0].id;
            SongsartistsTable.create({ ArtistId: artistid, SongId: songid });
          }
        );
      });

      res.json({ message: "Song Added Successfully", Success: true });
    });
  } 
  else {
    res.json({ message: "Song Already Available", Success: true });
  }
};


exports.GetSongs=async (req,res)=>{
  await Songs.findAll()
  .then((songs)=>{
    res.json({songs})

  })

}