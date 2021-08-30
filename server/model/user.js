const mongoose = require('mongoose')
const ObjectId = mongoose.Schema;
const userSchema =new mongoose.Schema({
    name : {type : String},
    email :{
        type : String,
        require : true,
        index : true
    },
    role : {
        default : "Subcribler",
        type : String
    }
},
    {timestamps : true}


)

module.exports = mongoose.model("User",userSchema)