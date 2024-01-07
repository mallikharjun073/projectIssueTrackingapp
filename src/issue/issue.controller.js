import { IssueRepository } from "./issue.repository.js"

const createIssue = async(req, res) =>{
    try{
        const {proj_id} = req.body;
        const result = await IssueRepository.addIssue(req.body);
        res.redirect(`/projects/view?proj_id=${proj_id}`);
    }catch(error){
        console.log(error)
        throw Error(error)
    }
}


export { createIssue }