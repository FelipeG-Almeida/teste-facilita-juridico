import knex from 'knex';

export default class BaseDatabase {
	static connection = knex({
		client: 'pg',
		connection: {
			user: 'postgres',
			host: 'localhost',
			database: 'postgres',
			password: '123',
			port: 5432,
		},
	});
}
