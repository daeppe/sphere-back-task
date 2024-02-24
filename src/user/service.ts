import * as bcrypt from 'bcrypt';
import { User } from '../database/entities/user.entity';
import { UserRepository } from './repository';


export class UserService {
    private userRepository = new UserRepository();

    async createUser(user: User): Promise<User> {
        if (!user.name || !user.email || !user.password) {
            throw new Error('Todos os campos (name, email e password) são obrigatórios para criar um novo usuário.');
        }

        const existingUser = await this.userRepository.findByEmail(user.email);
        if (existingUser) {
            throw new Error('O e-mail já está sendo usado por outro usuário.');
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser = {
            name: user.name,
            email: user.email,
            password: hashedPassword,
        };
        return this.userRepository.create(newUser);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findByEmail(email);
    }

    async login(email: string, password: string): Promise<User | undefined> {
        const user = await this.findByEmail(email);

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        if (!password) {
            throw new Error('Senha não preenchida.');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            throw new Error('Senha está incorreta');
        }
        return this.userRepository.login(email);
    }

    async update(email: string, userData: Partial<User>): Promise<User> {
        const oldUser = await this.findByEmail(email);
        this.userRepository.update(oldUser!.id, userData);
        const newUser = await this.findByEmail(email);
        return newUser!;
    }

    async delete(id: string): Promise<void> {
        return this.userRepository.delete(id);
    }
}