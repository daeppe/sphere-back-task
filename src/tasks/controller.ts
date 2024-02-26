import { Response } from 'express';
import TaskCustomRequest from '../interfaces/TaskCustomRequest';
import { TaskService } from './service';

const taskService = new TaskService();
export class TaskController {
    async createTask(request: TaskCustomRequest, response: Response) {
        try {
            const output = await taskService.createTask(request.taskData);
            response.json(output);
        } catch (error) {
            response.status(400).json((error as Error).message);
        }
    }

    async findTaskCompleted(request: TaskCustomRequest, response: Response) {
        try {
            const { userId } = request.params;
            const output = await taskService.findTaskCompleted(String(userId));
            response.json(output);
        } catch (error) {
            response.status(400).json((error as Error).message);
        }
    }

    async findTaskNotCompleted(request: TaskCustomRequest, response: Response) {
        try {
            const { userId } = request.params;
            const output = await taskService.findTaskNotCompleted(String(userId));
            response.json(output);
        } catch (error) {
            response.status(400).json((error as Error).message);
        }
    }

    async toComplete(request: TaskCustomRequest, response: Response) {
        try {
            const output = await taskService.toComplete(request.taskData);
            response.json(output);
        } catch (error) {
            response.status(400).json((error as Error).message);
        }
    }

    async delete(request: TaskCustomRequest, response: Response) {
        try {
            const { id } = request.params;
            const output = await taskService.delete(id);
            response.status(204).json(output);
        } catch (error) {
            response.status(400).json((error as Error).message);
        }
    }
}