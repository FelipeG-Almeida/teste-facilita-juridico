import express from 'express';
import { clienteRouter } from "./routes/clienteRouter";

const app = express();
app.use(express.json());

app.listen(3003), () => {
	console.log('Servidor rodando na porta 3003');
};

app.use("/clientes", clienteRouter);
