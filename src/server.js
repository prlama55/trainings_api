const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/", function (req, res) {
  let a = "aa";
  for (let i = 1; i <= 2; i++) {
    console.log("===", i);
    var b = 25;
  }
  console.log("outside for loop===", b);
  res.json({ message: "Welcome page" });
});
app.get("/:id", function (req, res) {
  const { body, params, path, query } = req;
  console.log("body=", body, "params=", params, "path=", path, "query=", query);
  const { password, username, ...otherParams } = body;
  res.status(200).send({
    logedInUser: otherParams,
  });
});
app.get("/home", function (req, res) {});
app.get("/*", (req, res) => {
  res.send("Other request");
});

app.listen(3000, () => {
  console.log("Server listen on port 3000");
});
