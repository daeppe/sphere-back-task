import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1708786061083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE public."user" (
            id uuid DEFAULT uuid_generate_v4() NOT NULL,
            name varchar(100) NOT NULL,
            email text NOT NULL,
            "password" text NOT NULL,
            CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id)
        );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        drop table public.user
        `);
    }

}
