var bcrypt = require("bcryptjs");

const USER_DATA = [
  {
    id: 0,
    username: "duynd",
    email: "duynd0909@gmail.com",
    password:bcrypt.hashSync("Duy123456", 8),
  },
  {
    id: 1,
    username: "hieppv",
    email: "hieppv@gmail.com",
    password:bcrypt.hashSync("Hiep123456", 8),
  },
];

module.exports = 
  USER_DATA

