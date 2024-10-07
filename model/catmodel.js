var mongoose= require('mongoose');
var cartSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})
module.exports=mongoose.model('cart',cartSchema)