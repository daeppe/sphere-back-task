import { NextFunction, Response } from 'express';
import UserCustomRequest from '../interfaces/UserCustomRequest';

export function extractUserData(request: UserCustomRequest, response: Response, next: NextFunction): void {
    const { email, password, id, name, tasks } = request.body;
    request.userData = { email, password, id, name, tasks };
    next();
}