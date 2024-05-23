import mongoose, { Mongoose } from "mongoose";

const examSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    totalmark:{
        type:Number,
        required:true
    },
    totalquestion:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },

});


const exam = mongoose.model("ExamCollection", examSchema);

export default exam;