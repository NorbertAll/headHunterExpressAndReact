const express= require('express');
const { validateToken } = require('../middlewares/AuthMiddleware');
const router =express.Router();
const {HrUsers}= require("../models");


router.post('/', validateToken, async (req, res)=>{
    const comment =req.body;
    const username= req.user.username;
    comment.username=username;
    await Comments.create(comment);
    res.json(comment);
});
router.delete('/:commentId', validateToken, async (req, res)=>{
    const commentId =req.params.commentId;
    await Comments.destroy({where:{id:commentId}})
    res.json("delete success");
});

module.exports = router;