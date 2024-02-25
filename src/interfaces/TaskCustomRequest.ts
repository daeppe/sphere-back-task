import { Request } from 'express';
import { Task } from '../database/entities/task.entity';

interface TaskCustomRequest extends Request {
    taskData: Task
}

export default TaskCustomRequest;
