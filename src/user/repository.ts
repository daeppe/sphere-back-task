import { PostgresDataSource as db } from '../database/data-source';
import { User } from '../database/entities/user.entity';

export class UserRepository {
    private userDb = db.getRepository(User);

    async create(user: Partial<User>): Promise<User> {
        return this.userDb.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.userDb.findOne({ where: { email } });
        return user || undefined;

    }

    async login(email: string): Promise<User | undefined> {
        return this.findByEmail(email);
    }

    async update(id: string, userData: Partial<User>): Promise<void> {
        await this.userDb.update(id, userData);
    }

    async delete(id: string): Promise<void> {
        await this.userDb.delete(id);
    }
}