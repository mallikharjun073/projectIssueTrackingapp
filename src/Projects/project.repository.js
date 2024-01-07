import { projectmodel } from "./project.model.js";

class ProjectRepo{
    
    async addProject(projectData){
        const project = new projectmodel(projectData);
        return await project.save();
    }

    async find(cond){
        const alllist = projectmodel.find(cond);
        return alllist;
    }
}

export const ProjectRepository = new ProjectRepo();