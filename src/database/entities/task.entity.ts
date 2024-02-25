import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    title!: string;

    @Column('date')
    deadline!: Date;

    @Column('text')
    description!: string;

    @Column({ type: 'boolean', default: false })
    isCompleted!: boolean;

    @ManyToOne(() => User, user => user.tasks)
    user!: User;
}