const controller = require("../controllers/auth.controller");

module.exports = function(app) {


  app.post("/api/auth/signin", controller.signin);
};
