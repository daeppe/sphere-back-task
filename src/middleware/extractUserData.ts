import { NextFunction, Response } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

export function extractUserData(request: CustomRequest, response: Response, next: NextFunction): void {
    const { email, password, id, name, tasks } = request.body;
    request.userData = { email, password, id, name, tasks };
    next();
}