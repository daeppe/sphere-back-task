import { Request } from 'express';
import { User } from '../database/entities/user.entity';

interface CustomRequest extends Request {
    userData: User
}

export default CustomRequest;
