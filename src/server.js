const express = require("express");
const bodyParser = require("body-parser");
const { APP_PORT } = require("./config");
const { logger } = require("./middlewares");
const app = express();
app.use(bodyParser.json());
app.use(logger);

app.use(express.static(__dirname + "/assets"));
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
console.log("__dirname===", __dirname);
require("./routes")(app);

app.get("/*", (req, res) => {
  console.log("Home page===", req.appId);
  res.render("index.html");
});
app.get("/*/*", (req, res) => {
  res.status(403).send("Page not found");
});
app.listen(APP_PORT, () => {
  console.log(`App is running at http://localhost: ${APP_PORT}`);
});
