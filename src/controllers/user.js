const User = require("../models/Users");
exports.userList = (req, res) => {
  res.send("User List");
};

exports.createUser = (req, res) => {
  res.send("User Create");
  // new User().save((error, newUser) => {
  //   if (error) throw new Error("Unable to save user");
  //   res
  //     .status(301)
  //     .send(
  //       { message: "User Successfully Created" },
  //       { data: newUser }
  //     );
  // });
  new User(req.body)
    .save()
    .then((newUser) => {})
    .catch((error) => {
      throw new Error("Unable to save User.");
    });
};

exports.userDetails = (req, res) => {
  res.send("User details");
};

exports.userUpdate = (req, res) => {
  res.send("User Update");
};
