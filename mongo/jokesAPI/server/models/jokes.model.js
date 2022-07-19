const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup : {
        type: String,
        required: [true, "bruh how you gonna tell a joke with no setup smh"]
    },
    punchline : {
        type: String,
        requried: [true, "omg bro you didn't even tell the funny part"]
    }, 
},
{timestamps: true}
)

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;