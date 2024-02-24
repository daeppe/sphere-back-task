import { PostgresDataSource as db } from '../database/data-source';
import { User } from '../database/entities/user.entity';
import * as bcrypt from 'bcrypt';

export class UserRepository {
    private userRepository = db.getRepository(User);

    async create(user: User): Promise<User> {
        const existingUser = await this.userRepository.findOne({ where: { email: user.email } });
        if (existingUser) {
            throw new Error('O e-mail já está sendo usado por outro usuário.');
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser = this.userRepository.create({
            name: user.name,
            email: user.email,
            password: hashedPassword
        });

        return this.userRepository.save(newUser);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.userRepository.findOne({ where: { email } });
        return user || undefined;

    }

    async login(email: string, password: string): Promise<User | undefined> {
        const user = await this.findByEmail(email);

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            throw new Error('Senha está incorreta');
        }

        return user;
    }

    async update(id: string, userData: Partial<User>): Promise<User> {
        await this.userRepository.update(id, userData);

        const updateUser = await this.userRepository.findOne({ where: { id: id } });
        return updateUser!;
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}