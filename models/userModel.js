const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add the user name"],

    },
    email:{
        type: String,
        required : [true, "please add the user email address"],
        unique: [true, "email address already taken"]
    },
    password: {
        type: String,
        required: [true, "please the user passworkd"],
    }
},{timestamps: true})

module.exports = mongoose.model("user", userSchema)