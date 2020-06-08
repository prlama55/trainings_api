const controllers = require("../controllers");
const { auth } = require("../middlewares");
console.log("controllers=====", controllers);
module.exports = (app) => {
  // app.get("/", index);
  // router("/").get(auth, controllers.userDetails);
  app
    .get("/api/users", auth, controllers.userList)
    .post("/api/users", controllers.createUser);

  app
    .get("/api/users/:id", controllers.userDetails)
    .put("/api/users/:id", controllers.userUpdate)
    .delete("/api/users/:id", controllers.deleteUser);

  // user login
  app.post("/api/login", controllers.login);
};
