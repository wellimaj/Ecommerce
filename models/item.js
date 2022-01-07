const mongoose = require('mongoose')

const ItemSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true

    },
    image:String
    ,
    clicks  : Number,
    description:{
        type:String,
        required:true,
        }
        ,
    price:{
            type:Number,
            required:true
        },
    
});
module.exports = mongoose.model("Item", ItemSchema);