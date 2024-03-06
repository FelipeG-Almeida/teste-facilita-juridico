import { BaseDatabase } from "./baseDatabase"

export class ClienteDatabase extends BaseDatabase {
    async insertCliente(cliente) {
        await BaseDatabase.connection('clientes')
    }
}