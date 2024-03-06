

export default class ClienteController {
	constructor(clienteBD) {}

	cadastro = async (req, res) => {
		try {
			const input = {
				name: req.body.name,
				email: req.body.email,
				telefone: req.body.telefone,
			};

			const output = await this.clienteBD.cadastro(input);
			res.status(201).send(output);
		} catch (error) {
			console.log(error);
		}
	};
}
