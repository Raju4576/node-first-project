var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    image:{
        type:String
    }
})
module.exports=mongoose.model('only',userSchema)