/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bcrypt from 'bcrypt';
import { User } from '../database/entities/user.entity';
import { UserRepository } from './repository';


export class UserService {
    private userRepository = new UserRepository();

    async createUser(user: User): Promise<Partial<User>> {
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

        const userOutput = await this.userRepository.create(newUser);

        const { password, ...userWithoutPassword } = userOutput!;

        return userWithoutPassword;

    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findByEmail(email);
    }

    async login(email: string, passwordInput: string): Promise<Partial<User> | undefined> {
        const user = await this.findByEmail(email);

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        if (!passwordInput) {
            throw new Error('Senha não preenchida.');
        }

        const isPasswordMatch = await bcrypt.compare(passwordInput, user.password);

        if (!isPasswordMatch) {
            throw new Error('Senha está incorreta');
        }

        const userOutput = await this.userRepository.login(email);

        const { password, ...userWithoutPassword } = userOutput!;

        return userWithoutPassword;
    }

    async update(email: string, userData: Partial<User>): Promise<Partial<User>> {
        const oldUser = await this.findByEmail(email);
        const hashedPassword = await bcrypt.hash(oldUser!.password, 10);
        await this.userRepository.update(oldUser!.id, { ...oldUser, password: hashedPassword });
        const newUser = await this.findByEmail(email);
        const { password, ...userWithoutPassword } = newUser!;
        return userWithoutPassword;
    }

    async delete(email: string): Promise<void> {
        const user = await this.findByEmail(email);
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        return this.userRepository.delete(user.id);
    }
}