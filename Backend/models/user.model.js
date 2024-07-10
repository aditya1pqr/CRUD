const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        reqired:true,
        maxlength:[ 25,"name is should be 25 charaters"],
    },
    email:{
        type:String,
        requrired:true,
        unique:true,
    }
});

module.exports = mongoose.model("User",UserSchema)