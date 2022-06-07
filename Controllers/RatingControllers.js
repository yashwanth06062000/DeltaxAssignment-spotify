const Songs = require("../Models/Songs");
const Artists = require("../Models/artistsongs");
const Artiststable = require("../Models/Artists");
const userratings = require("../Models/userratings");

exports.addrating = async (req, res) => {
  const songid = +req.body.songid;
  const songrating = +req.body.songrating;
  const user = +req.user.id;
  let existingrating = undefined;

  await userratings
    .findAll({ where: { UserId: user, SongId: songid } })
    .then((result) => {
      existingrating = +result[0];
    });
  if (existingrating == undefined) {
    await Songs.findAll({ where: { id: songid } }).then(async (song) => {
      const avgrating = +song[0].avgrating;
      const noofratings = +song[0].totalratings;
      const newrating = Math.abs(
        ((avgrating * noofratings) + songrating) / (noofratings + 1)
      );
      const newnoofratings = noofratings + 1;
     await Songs.update(
        { avgrating: newrating, totalratings: newnoofratings },
        { where: { id: song[0].id } }
      );

      await userratings
        .create({ rating: songrating, SongId: songid, UserId: user })
        .then(async () => {
          await Artists.findAll({ where: { SongId: songid } }).then(
            async (results2) => {
              for (let i = 0; i < results2.length; i++) {
                var Artrating = 0;
                await Artists.findAll({
                  where: { ArtistId: results2[i].ArtistId },
                }).then(async (results4) => {
                  for (let j = 0; j < results4.length; j++) {
                    await Songs.findAll({
                      where: { id: results4[i].SongId },
                    }).then((result5) => {
                      Artrating += +result5[0].avgrating;
                    });
                  }
                  console.log("in line 47")
                  const newartistrating = Math.abs(Artrating / results4.length);
                  await Artiststable.update(
                    { avgrating: newartistrating },
                    { where: { id: results2[i].ArtistId } }
                  );
                });
              }
            }
          );
        });
    });
    res.json({message:"User Added rating successfully"})
  } else {
    res.json({ message: "user Already rated to this song" });
  }
};
