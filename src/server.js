const express = require("express");
const { APP_PORT } = require("./config");
const app = express();
require("./routes")(app);

app.listen(APP_PORT, () => {
  console.log(`App is running at http://localhost: ${APP_PORT}`);
});
