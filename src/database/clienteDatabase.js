import BaseDatabase from './baseDatabase.js';

export default class ClienteDatabase extends BaseDatabase {
	async insertCliente(cliente) {
		await BaseDatabase.connection('clientes').insert(cliente);

		// Tentei fazer o insert usando uma query através do knex, porém ele não permite o uso da query no método insert
		// await BaseDatabase.connection('clientes').raw(
		// 	'INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)',
		// 	[cliente.nome, cliente.email, cliente.telefone]
		// );
	}

	async getClientes() {
		const clientes = await BaseDatabase.connection('clientes')
			.select('*')
			.from('clientes');
		return clientes;
	}
}
