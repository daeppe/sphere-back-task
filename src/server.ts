import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PostgresDataSource } from './database/data-source';
import { appRouter } from './route';

const SERVER_PORT = process.env.SERVER_PORT || undefined;

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', appRouter);

app.get('/', (req, res) => {
    res.json(`Projeto Sphere Back Task, ${Date()}`);
});

PostgresDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
        app.listen(SERVER_PORT, () => {
            console.log(`Projeto Sphere Back Task rodando na porta ${SERVER_PORT}`);
        });
    })
    .catch(error => {
        console.error('Error during Data Source initialization:', error);
    });
