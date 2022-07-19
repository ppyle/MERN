const { response } = require("express");
const { request } = require("http");
const Joke = require("../models/jokes.model")

// ...retrieve an array of all documents in the User collection


module.exports.helloWorld = (req, res)=> res.json({message: "hello world"});


module.exports.showAllJokes = (req,res) =>{
    Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err =>{res.json({
        message: "couldn't find nothing bruh",
        error: err
    })})
}

module.exports.createOne = (req,res) =>{
    Joke.create(req.body)
    .then(newJoke => res.json(newJoke))
    .catch(err => {res.json({
        message: "man you done fucked something up",
        error: err
    })})
}


module.exports.findOne = (req,res) =>{
    Joke.findOne({_id: req.params.id})
    .then (joke =>{
        res.json(joke)
    })
    .catch(err => {res.json({
        message: "man you done fucked something up",
        error: err
    })})
}


module.exports.updateOne = (req,res) =>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body
        )
    .then (joke =>{
        res.json(joke)
    })
    .catch(err => {res.json({
        message: "man you done fucked something up",
        error: err
    })})
}

module.exports.deleteOne = (req,res) =>{
    Joke.deleteOne({_id: req.params.id})
    .then(joke =>{res.json(joke)})
    .catch(err => {res.json({
        message: "man you done fucked something up",
        error: err
    })})
}