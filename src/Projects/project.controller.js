import { IssueRepository } from "../issue/issue.repository.js";
import { ProjectRepository } from "./project.repository.js"

const addproject = async(req, res) => {
    try{
        const result = await ProjectRepository.addProject(req.body);
        res.redirect('/');
    }catch(error){
        console.log(error)
        throw Error(error)
    }
}

const getprojectById = async(req, res)=>{
    try{
        console.log(req.query)
        const { proj_id } = req.query;
        const result = await ProjectRepository.find({_id:proj_id});
        const issues = await IssueRepository.find({proj_id})
        console.log(result)
        res.render(`viewproject`,{result,issues});
    }catch(error){
        console.log(error)
        throw Error(error)
    }
}



export { addproject , getprojectById}