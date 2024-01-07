import { Router } from "express";
import {addproject,getprojectById} from "../Projects/project.controller.js";
const ProjectsRouter = Router()

ProjectsRouter.post('/addproject', addproject);
ProjectsRouter.get('/view', getprojectById);

export default ProjectsRouter;