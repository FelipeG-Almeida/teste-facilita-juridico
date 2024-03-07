import ClienteDatabase from '../database/clienteDatabase.js';

export default class ClienteController {
	constructor(clienteBD = new ClienteDatabase()) {
		this.clienteBD = clienteBD;
	}

	cadastro = async (req, res) => {
		try {
			const input = {
				nome: req.body.nome,
				email: req.body.email,
				telefone: req.body.telefone,
			};

			const output = await this.clienteBD.insertCliente(input);
			res.status(201).send(output);
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	};

	getClientes = async (req, res) => {
		try {
			const output = await this.clienteBD.getClientes();
			res.status(200).send(output);
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	};
}
