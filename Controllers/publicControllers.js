const users = require("../Models/Users.js");
const jwt = require("jsonwebtoken");

function generateAccessTocken(id) {
  return jwt.sign(id, process.env.Tokensecrect);
}

exports.usersignup = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const hashpassword = await encript.hash(password, 10);
  var exsitinguser = undefined;
  await users.findAll({ where: { name: name, email: email } }).then((res) => {
    existinguser = res[0];
  });
  if (existinguser == undefined) {
    await users
      .create({ username: name, email: email, password: hashpassword })
      .then(() => {
        res.json({ message: "user Created Successfully", Success: true });
      });
  } else {
    res.json({ message: "useralready exsits", Success: false });
  }
};

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  users
    .findAll({ where: { email: email } })
    .then((result) => {
      if (result[0] != undefined) {
        encript.compare(password, result[0].password, function (err, response) {
          if (err) {
            return res.json({
              success: false,
              message: "Something went wrong",
            });
          }
          if (response) {
            const jwttoken = generateAccessTocken(result[0].id);
            res.json({
              token: jwttoken,
              success: true,
              message: "Successfully Logged In",
            });
          } else {
            return res
              .status(401)
              .json({ success: false, message: "passwords do not match" });
          }
        });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
    })
    .catch((err) => console.log(err));
};
