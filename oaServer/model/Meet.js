const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    place:{type:String},
    name:{
        type:String,
        // select:false,
        // set:function (val){
        //     return require('bcrypt').hashSync(val,10)
        // }
    },
    title:{type:String},
    startT:{type:String},
    endT:{type:String},
    startD:{type:Date},
    
    
    
})
if (mongoose.models.Meet) {
    Meet = mongoose.model('Meet');
  } else {
    Meet = mongoose.model('Meet', schema);
  }
  
  module.exports = Meet;