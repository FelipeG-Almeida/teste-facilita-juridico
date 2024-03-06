import express from "express"

export const clienteRouter = express.Router();

const clienteController = new ClienteController();

clienteRouter.post('/cadastro', clienteController.cadastro);

