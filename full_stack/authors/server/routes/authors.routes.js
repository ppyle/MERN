const AuthorController = require("../controllers/authors.controller")

module.exports = (app) =>{
    app.get("/hello", AuthorController.helloWorld);

    app.get("/api", AuthorController.showAllAuthors);
    app.post("/api/authors", AuthorController.createOne);
    app.get("/api/authors/:id", AuthorController.findOne)
    app.put("/api/authors/:id", AuthorController.updateOne)
    app.delete("/api/authors/:id", AuthorController.deleteOne)
}
