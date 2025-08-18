import express, { Router } from 'express';
import router from './routers/router.js';

const log = console.log;

const app = express();
app.use(express.json());

app.use('/tarefas', router);

console.log('Iniciando o servidor...');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    log(`Server rodando na porta https://localhost:${PORT}`);
})
