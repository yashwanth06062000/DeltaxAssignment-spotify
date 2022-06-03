const Artists = require("../Models/Artists.js");

exports.Addartist = (req, res) => {
  const artistname = req.body.artistname.toLowerCase();
  const dateofbirth = req.body.dob;
  const bio = req.body.bio;
  const avgrating = 0;
  const totalsongs = 0;
  var existingartist = undefined;
  Artists.findAll({ where: { artistname: artistname } }).then((res) => {
    existingsong = res[0];
  });
  if (existingartist == undefined) {
    Artists.create({
      artistname: artistname,
      dateofbirth: dateofbirth,
      bio: bio,
      avgrating: avgrating,
      totalsongs: totalsongs,
    }).then(() => {
      res.json({ message: "Artist Added Successfully", Success: true });
    });
  } else {
    res.json({ message: "Artist Already Available", Success: true });
  }
};
