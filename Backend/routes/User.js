const express= require('express');
const router =express.Router();
const {Users}= require("../models");
const bcrypt= require('bcrypt')

const {sign}= require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthMiddleware');

//router.post();
router.post('/',async (req, res)=>{
    const {email, password, role } =req.body;
    bcrypt.hash(password, 10).then((hash)=>{
        Users.create({
            email: email,
            password: hash,
            role: role,
        
        })
        res.json("Success");
    });
});
router.post('/login',async (req, res)=>{
    const {email, password} =req.body;
   
   
    const user= await Users.findOne({where: {email:email}});
    
    if(!user){
        res.json({error: "User Doesn't exist"});}
    else{
    bcrypt.compare(password, user.password).then((match)=>{
        if(!match) res.json({error: "Wrong username or password"});
        const accessToken = sign({email: user.email, id:user.id}, "importantsecret")
        res.json({accessToken: accessToken, roles:user.role})
    })
}
});


router.get('/token',validateToken,async (req, res)=>{
    res.json(req.user);
});

module.exports = router;
