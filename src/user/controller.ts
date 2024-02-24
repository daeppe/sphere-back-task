import { Response } from 'express';
import { UserService } from './service';
import CustomRequest from '../interfaces/CustomRequest';

export class UserController {
    private userService = new UserService();

    async create(request: CustomRequest, response: Response) {
        try {
            const output = await this.userService.createUser(request.userData);
            response.json(output);
        } catch (error) {
            response.json(error);
        }
    }

    async login(request: CustomRequest, response: Response) {
        try {
            const { email, password } = request.userData;
            const output = await this.userService.login(email, password);
            response.json(output);
        } catch (error) {
            response.json(error);
        }
    }

    async update(request: CustomRequest, response: Response) {
        try {
            const { email } = request.userData;
            const output = await this.userService.update(email, request.body);
            response.json(output);
        } catch (error) {
            response.json(error);
        }
    }

    async delete(request: CustomRequest, response: Response) {
        try {
            const { id } = request.userData;
            const output = await this.userService.delete(id);
            response.status(204).json(output);
        } catch (error) {
            response.json(error);
        }
    }
}