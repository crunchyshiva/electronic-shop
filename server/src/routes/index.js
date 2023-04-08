module.exports = app => {
    const userController = require("../controller/User");
    const productController = require("../controller/Product");
    const cartController = require("../controller/Cart");
    const orderController = require("../controller/Order");


    app.post("/api/signup", userController.createUser);
    app.post("/api/login", userController.loginUser);
    app.post("/api/product", productController.createProduct);
    app.get("/api/category", productController.getCategory);
    app.get("/api/product", productController.getProduct);
    app.get("/api/category/products", productController.getProductByCategory);
    app.post("/api/cart", cartController.addProdctToCart);
    app.get("/api/cart", cartController.getCart);
    app.post("/api/order", orderController.orderPlaced);
};  