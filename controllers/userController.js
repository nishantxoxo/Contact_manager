const asyncHandler =require("express-async-handler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const { Error } = require("mongoose")

const registerUser = asyncHandler(async (req, res)=>{
    const {username, email, password} = req.body
    if( !username || !email || !password){
        res.status(400);
        throw new Error("all feilds are mandartory")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400)
        throw new Error("user already registered")       
    }
    //hash pass
    const hashedPassword = await bcrypt.hash(password, 10);

    // if(user && (await bcrypt.compare(pass)))
    console.log(hashedPassword);
    const user = await User.create({
        username: username, 
        email: email,
        password: password,
    })
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(400)
        throw new Error("user data not valid")
    }
    res.json({message: "register the user"})
})

const loginUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body;
    if(!email ||  !password){
        res.status(400);
        throw new Error("allfeilds are mandatory")
    }

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email : user.email,
                id: user.id
            },
        }, )
    }

    res.json({message: "login the user"})
} )

const currentUser = asyncHandler(async (req, res)=>{
    res.json({message: "current user info"})
} )

module.exports = {registerUser, loginUser, currentUser}