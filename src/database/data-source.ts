import { DataSource } from 'typeorm';

const DB_HOST = String(process.env.DB_HOST);
const DB_PORT = Number(process.env.DB_PORT);
const DB_USERNAME = String(process.env.DB_USERNAME);
const DB_PASSWORD = String(process.env.DB_PASSWORD);
const DB_DATABASE = String(process.env.DB_DATABASE);

export const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [`${__dirname}/**/*.entity{.js,.ts}`],
    migrations: [`${__dirname}/migrations/*{.js,.ts}`],
    migrationsRun: true
});