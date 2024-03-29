import { Request } from 'express';
import { User } from '../database/entities/user.entity';

interface UserCustomRequest extends Request {
    userData: User
}

export default UserCustomRequest;
