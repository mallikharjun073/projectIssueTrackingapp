import { issuemodel } from "./issue.model.js";

class IssueRepo{
    
    async addIssue(IssueData){
        const Issue = new issuemodel(IssueData);
        return await Issue.save();
    }

    async find(cond){
        const alllist = issuemodel.find(cond);
        return alllist;
    }
}

export const IssueRepository = new IssueRepo();