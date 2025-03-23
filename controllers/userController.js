const asyncHandler =require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")

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

    console.log(hashedPassword);
    
    res.json({message: "register the user"})
})

const loginUser = asyncHandler(async (req, res)=>{
    res.json({message: "login the user"})
} )

const currentUser = asyncHandler(async (req, res)=>{
    res.json({message: "current user info"})
} )

module.exports = {registerUser, loginUser, currentUser}