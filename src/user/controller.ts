import { Response } from 'express';
import { UserService } from './service';
import CustomRequest from '../interfaces/CustomRequest';

const userService = new UserService();
export class UserController {

    async create(request: CustomRequest, response: Response) {
        try {
            const output = await userService.createUser(request.userData);
            response.json(output);
        } catch (error) {
            response.status(400).json((error as Error).message);
        }
    }

    async login(request: CustomRequest, response: Response) {
        try {
            const { email, password } = request.userData;
            const output = await userService.login(email, password);
            return response.json(output);
        } catch (error) {
            return response.status(404).json((error as Error).message);
        }
    }

    async update(request: CustomRequest, response: Response) {
        try {
            const { email } = request.userData;
            const output = await userService.update(email, request.body);
            response.json(output);
        } catch (error) {
            response.json((error as Error).message);
        }
    }

    async delete(request: CustomRequest, response: Response) {
        try {
            const { id } = request.userData;
            const output = await userService.delete(id);
            response.status(204).json(output);
        } catch (error) {
            response.json((error as Error).message);
        }
    }
}