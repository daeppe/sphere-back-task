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

    async toCompleted(task: Task): Promise<Task> {
        return this.taskRepository.toComplete(task);
    }

    async delete(taskId: string): Promise<void> {
        await this.taskRepository.delete(taskId);
    }
}