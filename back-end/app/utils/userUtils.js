var  USER_DATA = require("../mocks/userData") ;

findUserByUsername = (username) => {
 let user = USER_DATA.find((user) => user.username === username)
  return user;
}
module.exports = {
  findUserByUsername,
};
