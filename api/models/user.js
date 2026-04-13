const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
 name:String,
 email:{type:String,unique:true},
 age:Number,
 isAdmin:{type:Boolean,default:false},
});


const User = mongoose.model("user",userSchema);

module.exports=User;
