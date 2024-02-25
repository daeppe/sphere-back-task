import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTask1708878083385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE public.task (
            id uuid DEFAULT uuid_generate_v4() NOT NULL,
            title varchar(100) NOT NULL,
            deadline date NOT NULL,
            description text NOT NULL,
            "isCompleted" bool DEFAULT false NOT NULL,
            "userId" uuid NULL,
            CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY (id),
            CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES public."user"(id)
        );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        drop table public.task
        `);
    }

}
