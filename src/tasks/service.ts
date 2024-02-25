import { Task } from '../database/entities/task.entity';
import { TaskRepository } from './repository';

export class TaskService {
    private taskRepository = new TaskRepository();

    async createTask(task: Task): Promise<Task> {
        return this.taskRepository.create(task);
    }

    async findTaskCompleted(userId: string): Promise<Array<Task | undefined>> {
        return this.taskRepository.findTaskCompleted(userId);
    }

    async findTaskNotCompleted(userId: string): Promise<Array<Task | undefined>> {
        return this.taskRepository.findTaskNotCompleted(userId);
    }

    async toComplete(task: Task): Promise<Task> {
        return this.taskRepository.toComplete(task);
    }

    async delete(taskId: string): Promise<void> {
        const task = await this.taskRepository.findtask(taskId);
        if (!task) {
            throw new Error('Task não encontrado.');
        }
        await this.taskRepository.delete(taskId);
    }
}