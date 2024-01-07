import mongoose from "mongoose";


const issueSchema = new mongoose.Schema({
    proj_id:{
        type:mongoose.Types.ObjectId
    },
    issue_title: {
        type:String
    },
    issue_desc:{
        type:String
    },
    issue_label:{
        type:String
    },
    issue_author:{
        type:String
    }
    },
    {
        timestamps: true 
    }
);

export const issuemodel = mongoose.model('Issue',issueSchema);





