const { API_KEY } = require("../config");
exports.logger = (req, res, next) => {
  console.log("Inside Logger====");
  //res.send("Hello from logger");
  // statement
  req.appId = API_KEY;
  next();
};
