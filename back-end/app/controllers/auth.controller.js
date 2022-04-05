const config = require("../config/auth.config");
// const User = require("../models/user.model")
const UserUtils = require("../utils/userUtils");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  let user = UserUtils.findUserByUsername(req.body.username);
  if (user) {
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(500).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    var token = jwt.sign({ username: user.username }, config.secret, {
      expiresIn: 300, //5 minute
    });

    var expiredTime = jwt.verify(token, config.secret, {}).exp;
    res.status(200).send({
      userDetail: {
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token,
      },
      expiredTime: expiredTime,
    });
  } else {
    return res.status(500).send({ message: "Invalid username" });
  }
};
