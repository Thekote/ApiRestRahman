const mongoose = require("mongoose")

const schema = mongoose.Schema({
    tittle: String,
    content: String,
})

module.exports = mongoose.model("Post", schema)