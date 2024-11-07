import mongoose from "mongoose";

blogSchema= new mongoose.Schema({

    title:{
        type:String,
        requited:true
    },

    author:{
        type:String,
        required:true

    },

    category:{
        type:String,
        required:true,
        enum:["Sport", "Fashion", "Lifestyle", "Education"]
    },

    // ask question here,,, whats d right tag to use for image
    image:{
        type:String,
        required:true

    },

    

    // ask about this field too
    // the post field

    post:{
        type:String,
        required:true
    },



}, {timestamps}) 
// time stamps help check the time

const blogModel=mongoose.models.blog || mongoose.model('blog', blogSchema)
export default blogModel