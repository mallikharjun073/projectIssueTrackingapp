import { Router } from "express";
import {createIssue} from "../issue/issue.controller.js"

const IssueRouter = Router()

IssueRouter.post('/addissue', createIssue);

export default IssueRouter;