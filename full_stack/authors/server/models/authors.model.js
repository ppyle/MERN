const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "bruh you this is literally the only thing you have to do"],
        minLength: [3, "bruh aint no name less than 3 characters bruh"]
    },
},
{timestamps: true}
)

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;