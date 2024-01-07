import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    project_name: {
        type:String
    },
    project_desc:{
        type:String
    },
    project_author:{
        type:String
    }
    },
    {
        timestamps: true 
    }
);

export const projectmodel = mongoose.model('Project',projectSchema);





