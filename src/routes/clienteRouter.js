import express from 'express';
import ClienteController from '../controller/clienteController.js';
import ClienteDatabase from '../database/clienteDatabase.js';

export const clienteRouter = express.Router();

const clienteController = new ClienteController(new ClienteDatabase());

clienteRouter.get('/', clienteController.getClientes);
clienteRouter.post('/cadastro', clienteController.cadastro);
