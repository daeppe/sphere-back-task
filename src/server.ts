import 'dotenv/config';
import express from 'express';

const SERVER_PORT = process.env.SERVER_PORT || undefined;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json(`Projeto Sphere Back Task, ${Date()}`);
});

app.listen(SERVER_PORT, () => {
    console.log(`Projeto Sphere Back Task rodando na porta ${SERVER_PORT}`);
});