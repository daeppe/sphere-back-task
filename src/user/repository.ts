import { PostgresDataSource as db } from '../database/data-source';
import { User } from '../database/entities/user.entity';

export class UserRepository {
    private userRepository = db.getRepository(User);

    async create(user: Partial<User>): Promise<User> {
        return this.userRepository.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.userRepository.findOne({ where: { email } });
        return user || undefined;

    }

    async login(email: string): Promise<User | undefined> {
        return this.findByEmail(email);
    }

    async update(id: string, userData: Partial<User>): Promise<void> {
        await this.userRepository.update(id, userData);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}