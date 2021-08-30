const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const subcategorySchema = new mongoose.Schema({

    name : {
        type : String,
        require : true
    },
    slug : {
        type : String,
        trim : true,
        index : true,
        lowercase : true,
        unique : true
    },
    image :{
        type : Array
    },
    parent : {
        type : ObjectId,
        ref : "Category",
        require : true
    }




},
{timestamps : true} 
)
module.exports = mongoose.model("Sub",subcategorySchema)