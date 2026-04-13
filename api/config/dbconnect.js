const mongoose=require("mongoose");

const connectDB=async()=>{
  try {
    let result=await mongoose.connect(process.env.DB_URI);
    console.log("database is connected")
  } catch (error) {
    console.log(error);
    console.log("database is not connected")
  }
}


module.exports=connectDB;