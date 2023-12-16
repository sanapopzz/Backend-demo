const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://sana:sana@cluster0.q67x4mj.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB Connected")})
.catch(err=>console.log(err));


const studentschema = new mongoose.Schema({
   Adminno:Number,
   Name:String,
   Age:Number,
   Course:String,
   image1:{
      data:Buffer,
      contentType:String
   }
   
})
var studentmodel=mongoose.model("student",studentschema)
module.exports=studentmodel;
