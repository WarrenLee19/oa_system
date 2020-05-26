const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    ID:{type:String},
    name:{
        type:String,
        // select:false,
        // set:function (val){
        //     return require('bcrypt').hashSync(val,10)
        // }
    },
    title:{type:String},
    startP:{type:String},
    startT:{type:Date},
    target:{type:String},
    endT:{type:Date},
    isOk:{type:String}
    
})
if (mongoose.models.Todo) {
    Todo = mongoose.model('Todo');
  } else {
    Todo = mongoose.model('Todo', schema);
  }
  
  module.exports = Todo;