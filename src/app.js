import express from 'express';
import cors from 'cors';
import { clienteRouter } from './routes/clienteRouter.js';

const app = express();
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.json());

app.listen(3003, () => {
	console.log('Servidor rodando na porta 3003');
});

app.use('/clientes', clienteRouter);
