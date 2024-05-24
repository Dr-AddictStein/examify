import mongoose from "mongoose";


const sectionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    exam:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ExamCollection',
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    sectionmark:{
        type:Number,
        required:true
    },
    totalquestion:{
        type:Number,
        required:true
    },
    sectionwisemarking:{
        type:Boolean,
        required:true
    },
    markingperquestion:{
        type:{
            pve:{
                type:Number
            },
            nve:{
                type:Number
            },
        },
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }

})

const section = mongoose.model("SectionCollection", sectionSchema);

export default section;