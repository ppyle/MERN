const JokeController = require("../controllers/jokes.controller")

module.exports = (app) =>{
    app.get("/hello", JokeController.helloWorld);

    app.get("/api", JokeController.showAllJokes);
    app.post("/api/jokes", JokeController.createOne);
    app.get("/api/jokes/:id", JokeController.findOne)
    app.put("/api/jokes/:id", JokeController.updateOne)
    app.delete("/api/jokes/:id", JokeController.deleteOne)
}
