const controllers = require("../controllers");
console.log("controllers=====", controllers);
module.exports = (app) => {
  // app.get("/", index);
  app
    .get("/api/users", controllers.userList)
    .post("/api/users", controllers.createUser);

  app
    .get("/api/users/:id", controllers.userDetails)
    .put("/api/users/:id", controllers.userUpdate);
};
