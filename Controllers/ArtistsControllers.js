const res = require("express/lib/response");
const Artists = require("../Models/Artists.js");
console.log("in Backend");
exports.Addartist = (req, res) => {
  const Artistname = req.body.artistname;
  const artistname = Artistname.toLowerCase();

  const dateofbirth = req.body.dateofbirth;
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
exports.getartists=(async(req,res)=>{
  Artists.findAll()
  .then((results)=>{
    res.json({results})

  })
})
