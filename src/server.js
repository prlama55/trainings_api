const express = require("express");
const bodyParser = require("body-parser");
const { APP_PORT } = require("./config");
const { logger } = require("./middlewares");
const app = express();
app.use(bodyParser.json());
app.use(logger);
require("./routes")(app);

app.get("/*", (req, res) => {
  console.log("Home page===", req.appId);
  res.send("Welcome!");
});
app.get("/*/*", (req, res) => {
  res.status(403).send("Page not found");
});
app.listen(APP_PORT, () => {
  console.log(`App is running at http://localhost: ${APP_PORT}`);
});
