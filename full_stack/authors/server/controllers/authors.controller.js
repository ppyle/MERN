const Author = require("../models/authors.model")

// ...retrieve an array of all documents in the User collection


module.exports.helloWorld = (req, res)=> res.json({message: "hello world"});


module.exports.showAllAuthors = (req,res) =>{
    Author.find()
    .then(authors => res.json(authors))
    .catch(err =>{res.json({
        error: err
    })})
}

module.exports.createOne = (req,res) =>{
    Author.create(req.body)
    .then(newAuthor => res.json(newAuthor))
    .catch(err => {res.json({
        error: err
    })})
}


module.exports.findOne = (req,res) =>{
    Author.findOne({_id: req.params.id})
    .then (author =>{
        res.json(author)
    })
    .catch(err => {res.json({
        error: err
    })})
}


module.exports.updateOne = (req,res) =>{
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
    .then (author =>{
        res.json(author)
    })
    .catch(err => {res.json({
        error: err
    })})
}

module.exports.deleteOne = (req,res) =>{
    Author.deleteOne({_id: req.params.id})
    .then(author =>{res.json(author)})
    .catch(err => {res.json({
        error: err
    })})
}