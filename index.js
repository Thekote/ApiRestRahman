const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const Post = require("./models/Post");


// Connect to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/acmedb", {useNewUrlParser: true})
    .then(() => {

        const app = express()
        app.use(express.json())
        app.use("/api", routes)

        
        app.listen(5000, () => {
        console.log("Server Has Started!");
        })
    
    })

        
 