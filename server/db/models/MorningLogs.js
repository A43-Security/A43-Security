const knex = require('../knex');
const authUtils = require('../../utils/auth-utils')

class Logs {

    constructor({ firstname, lastname, company}) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.company = company;
    }

    static async createLogs(firstName, lastName, company) {
        const query = `
            INSERT INTO logs (firstname, lastname, company)
            VALUES (?, ?, ?)
            RETURNING *, created_at;
        `;
        const { rows } = await knex.raw(query, [firstName, lastName, company]);
        return new Logs(rows[0]);
    }


    static async listAllLogs() { // Get all
        const query = `
            SELECT * 
            FROM logs;
        `;
        const { rows } = await knex.raw(query);
        const logs = rows;

        return logs.map((log) => new Logs(log));
    }
}

module.exports = Logs;