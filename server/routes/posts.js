const express = require('express');
const { validateToken } = require('../middleware/AuthMiddleware');
const router = express.Router();
const {Posts} = require('../models')
router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.get('/byId/:id', async (req,res) =>{
    const id = req.params.id
    const post = await Posts.findByPk(id);
    res.json(post);
})

router.post("/", validateToken, async (req, res) => {
    const post = req.body;
    post.username = req.user.username
    await Posts.create(post);
    res.json(post);
});


router.put("/title", validateToken, async (req, res) => {
    const {newTitle, id} = req.body;
    await Posts.update({title: newTitle},{where: {id: id}})

    res.json(newTitle );
});

router.put("/postText", validateToken, async (req, res) => {
    const {newText, id} = req.body;
    await Posts.update({postText: newText},{where: {id: id}})

    res.json(newText);
});

router.delete("/:postId", validateToken, async(req,res) =>{
    const postId = req.params.postId
    await Posts.destroy({
        where:{
            id: postId
        }
    })

    res.json("Comment Deleted")
})

module.exports = router;
