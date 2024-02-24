import express from 'express';
import { userRouter } from './user/route';

export const appRouter = express();

appRouter.use('/user', userRouter);

