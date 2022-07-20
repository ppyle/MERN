const { response } = require("express");
const { request } = require("http");
const Product = require("../models/product.model")

// ...retrieve an array of all documents in the User collection


module.exports.helloWorld = (req, res)=> res.json({message: "hello world"});


module.exports.showAllProducts = (req,res) =>{
    Product.find()
    .then(products => res.json(products))
    .catch(err =>{res.json({
        message: "couldn't find nothing bruh",
        error: err
    })})
}

module.exports.createOne = (req,res) =>{
    Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(err => {res.json({
        message: "man you done fucked something up",
        error: err
    })})
}


module.exports.findOne = (req,res) =>{
    Product.findOne({_id: req.params.id})
    .then (product =>{
        res.json(product)
    })
    .catch(err => {res.json({
        message: "man you done fucked something up",
        error: err
    })})
}


module.exports.updateOne = (req,res) =>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body
        )
    .then (product =>{
        res.json(product)
    })
    .catch(err => {res.json({
        message: "man you done fucked something up",
        error: err
    })})
}

module.exports.deleteOne = (req,res) =>{
    Product.deleteOne({_id: req.params.id})
    .then(product =>{res.json(product)})
    .catch(err => {res.json({
        message: "man you done fucked something up",
        error: err
    })})
}