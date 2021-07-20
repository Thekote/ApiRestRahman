const express = require("express")
const Post = require("./models/Post")
const router = express.Router()


// Get all posts
router.get("/posts", async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

// Create post
router.post("/posts", async (req, res) =>{
    const post = new Post({
        tittle: req.body.tittle,
        content: req.body.content,
    })
    await post.save()
    res.send(post)
})

// Get post by id
router.get("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
    
    } catch {
            res.status(404)
            res.send({error: "Post not found!"})
        }
})

// Update post by id
router.patch("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id})

        if (req.body.tittle) {
            post.tittle = req.body.tittle
        }

        if (req.body.content) {
            post.content = req.body.content
        }

        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!"})
    }
})

// Delete post by id
router.delete("/posts/:id", async (req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id})
        res.status(204).send()
    } catch {
        res.status(404).send()
        res.send({ error: "Post doesn't exist!"})
    }
})

module.exports = router