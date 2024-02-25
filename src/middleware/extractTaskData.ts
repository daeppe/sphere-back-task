import { NextFunction, Response } from 'express';
import TaskCustomRequest from '../interfaces/TaskCustomRequest';

export function extractTaskData(request: TaskCustomRequest, response: Response, next: NextFunction): void {
    const { title, deadline, description, isCompleted, user, id } = request.body;
    request.taskData = { title, deadline, description, isCompleted, user, id };
    next();
}