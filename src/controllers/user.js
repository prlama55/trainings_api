<<<<<<< HEAD
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
=======
const { User } = require("../models");
const bcrypt = require("bcrypt");
exports.userList = async (req, res) => {
  const list = await User.find();
  res.status(200).send({
    data: list,
  });
};

exports.createUser = (req, res) => {
  // new User(req.body).save((error, newUser) => {
  //   if (error) throw new Error("Unable to save user");
  //   res.status(301).send({
  //     message: "User saved successfully",
  //     data: newUser,
  //   });
  // });
  console.log("req.body====", req.body);
  new User(req.body)
    .save()
    .then((newUser) => {
      res.status(301).send({
        message: "User saved successfully",
        data: newUser,
      });
    })
    .catch((error) => {
      console.log("error===", error);
      res.status(500).send({
        data: null,
        error: error.message,
      });
>>>>>>> 47bc8f733539b68e86c4942cf2564bc01035a117
    });
};

exports.userDetails = async (req, res) => {
  const user = await User.findById(req.params.id);
  // const user1 = await User.findOne({ _id: req.params.id });
  res.status(200).send({
    data: user,
  });
};

exports.userUpdate = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user) {
    console.log("req.body=====", req.body);
    // user = await User.findOneAndUpdate(req.params.id, req.body);
    user = await User.updateOne({ _id: req.params.id }, { $set: req.body });
  }
  res.send({
    data: user,
  });
};

exports.deleteUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user) {
    console.log("req.body=====", req.body);
    user = await User.findByIdAndRemove(req.params.id);
    // user = await User.remove({ _id: req.params.id });
  }
  res.send({
    data: user,
  });
};

exports.login=(req, res)=>{
  const user = await User.findOne({username: req.body.username});
  console.log("user.password====", user.password);
  bcrypt.compare(req.body.password, user.password, (err, matched) => {
    if (err) throw new Error("Password not matched");
    console.log("password matched===", matched);
  });
}