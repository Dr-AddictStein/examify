import mongoose from "mongoose";

const moduleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    section:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SectionCollection",
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    modulemark:{
        type:Number,
        required:true
    },
    totalquestion:{
        type:Number,
        required:true
    },
    randomizechapterquestions:{
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

const module=mongoose.model("ModuleCollection",moduleSchema);

export default module;