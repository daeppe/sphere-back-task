import { PostgresDataSource as db } from '../database/data-source';
import { Task } from '../database/entities/task.entity';

export class TaskRepository {
    private taskDb = db.getRepository(Task);

    async create(task: Task): Promise<Task> {
        return this.taskDb.save(task);
    }

    async findTaskCompleted(userId: string): Promise<Array<Task | undefined>> {
        const completedTask = await this.taskDb.find({ where: { user: { id: userId }, isCompleted: true } });
        return completedTask;
    }

    async findTaskNotCompleted(userId: string): Promise<Array<Task | undefined>> {
        const notCompletedTask = await this.taskDb.find({ where: { user: { id: userId }, isCompleted: false } });
        return notCompletedTask;
    }

    async toComplete(task: Task): Promise<Task> {
        await this.taskDb.update(task.id, { ...task, isCompleted: true });
        const taskUpdated = await this.taskDb.findOne({ where: { id: task.id } });
        return taskUpdated!;
    }

    async findtask(id: string): Promise<Task | undefined> {
        const task = await this.taskDb.findOne({ where: { id } });
        return task!;
    }

    async delete(taskId: string): Promise<void> {
        await this.taskDb.delete(taskId);
    }
}