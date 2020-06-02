// exports.index = (req, res) => {
//   res.send("Say Hello");
// };
const user = require("./user");
console.log("user=====", user);

module.exports = {
  ...user, // cerateUser, userList
};
