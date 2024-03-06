import knex from 'knex';

export class BaseDatabase {
	static connection = knex({
		client: 'pg',
		connection: {
			user: 'postgres',
			host: 'localhost',
			database: 'BD',
			password: '123',
			port: 5432,
		},
	});
}
