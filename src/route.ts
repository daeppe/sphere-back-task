import express from 'express';
import { userRouter } from './user/route';
import { taskRouter } from './tasks/route';

export const appRouter = express();

appRouter.use('/user', userRouter);
appRouter.use('/task', taskRouter);

