import { Application, Router } from 'express';
import { TaskController } from './controller';
import { extractTaskData } from '../middleware/extractTaskData';


export const taskRouter = Router();
const taskController = new TaskController();

taskRouter.use(extractTaskData as Application);

taskRouter.route('/create').post(taskController.createTask as Application);
taskRouter.route('/findtaskcompleted/:userId').get(taskController.findTaskCompleted as Application);
taskRouter.route('/findtasknotcompleted/:userId').get(taskController.findTaskNotCompleted as Application);
taskRouter.route('/tocomplete').patch(taskController.toComplete as Application);
taskRouter.route('/delete/:id').delete(taskController.delete as Application);