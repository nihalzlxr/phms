const mongoose = require("mongoose");
const userschema = mongoose.Schema({
    username: {type:String},
    email: {type:String},
    password: {type:String},
    type: {type:String, default:"user"}, // user or admin
    mobile: {type:String},
})

const User = mongoose.model("User", userschema);
module.exports = User;