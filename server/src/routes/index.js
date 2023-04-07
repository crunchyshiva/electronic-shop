module.exports = app => {
    const userController = require("../controller/User");
    const productController = require("../controller/Product");

    app.post("/api/signup", userController.createUser);
    app.post("/api/login", userController.loginUser);
    app.post("/api/product", productController.createProduct);
    app.get("/api/category", productController.getCategory);
    app.get("/api/product", productController.getProduct);
    app.get("/api/category/products", productController.getProductByCategory);
};  