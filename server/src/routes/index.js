module.exports = app => {
    const userController = require("../controller/User");
    
    app.post("/api/signup", userController.createUser);
    app.post("/api/login", userController.loginUser);

};  