import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}