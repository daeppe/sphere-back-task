import { Application, Router } from 'express';
import { UserController } from './controller';
import { extractUserData } from '../middleware/extractUserData';

export const userRouter = Router();
const userController = new UserController();

userRouter.use(extractUserData as Application);

userRouter.route('/create').post(userController.create as Application);
userRouter.route('/login').post(userController.login as Application);
userRouter.route('/update').patch(userController.update as Application);
userRouter.route('/delete').delete(userController.delete as Application);
