import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    name!: string;

    @Column('text')
    @IsEmail()
    email!: string;

    @Column('text')
    password!: string;

    @OneToMany(() => Task, task => task.user)
    tasks!: Task[];
}