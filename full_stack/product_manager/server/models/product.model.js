const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "bruh you need to know what its called bruh"]
    },
    description : {
        type: String,
        required: [true, "bruh you need tell them what it is bruh"]
    },
    price : {
        type: Number,
        requried: [true, "duuuddeee how they gonna buy it if they dont have a price"]
    }, 
},
{timestamps: true}
)

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;