const ProductController = require("../controllers/product.controller")

module.exports = (app) =>{
    app.get("/hello", ProductController.helloWorld);

    app.get("/api", ProductController.showAllProducts);
    app.post("/api/products", ProductController.createOne);
    app.get("/api/products/:id", ProductController.findOne)
    app.put("/api/products/:id", ProductController.updateOne)
    app.delete("/api/products/:id", ProductController.deleteOne)
}
