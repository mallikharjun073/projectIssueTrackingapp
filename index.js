import express from "express"
import expressLayouts from "express-ejs-layouts";
import { fileURLToPath } from 'url';
import path  from 'path';
import ProjectsRouter from "./src/Projects/project.router.js";
import { connectToDatabase } from "./src/common/mongodb.js";
import { ProjectRepository } from "./src/Projects/project.repository.js";
import IssueRouter from "./src/issue/issue.router.js";
// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('layout', 'layouts/layout');
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get('/', async (req, res)=>{
    const projectslist = await ProjectRepository.find();
    res.render('index', { projects: projectslist, message: 'Hello, EJS!' });
});

app.use('/projects/', ProjectsRouter);
app.use('/issue/', IssueRouter);
app.listen(3000,()=>{
    connectToDatabase();
    console.log('serverrunnig at 3000')
})