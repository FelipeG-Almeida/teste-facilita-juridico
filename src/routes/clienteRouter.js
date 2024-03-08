import express from 'express';
import ClienteController from '../controller/clienteController.js';
import ClienteDatabase from '../database/clienteDatabase.js';

export const clienteRouter = express.Router();

const clienteController = new ClienteController(new ClienteDatabase());

clienteRouter.get('/', clienteController.getClientes);
clienteRouter.get('/rota', clienteController.getRota);
clienteRouter.post('/cadastro', clienteController.cadastro);
