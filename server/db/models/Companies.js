const knex = require('../knex')

class Companies {

    static async getAllCompanies() {
        const query = `SELECT * FROM companies;`
        const { rows } = await knex.raw(query)

        return rows[0].id;
    }

    static async addCompany(name) {
        const query = `INSERT INTO companies (name) VALUES(?) RETURNING*`
        const { rows } = await knex.raw(query, [name]);

        return rows[0]
    }

    static async getCompanyId(name) {
        const query = `SELECT id FROM companies WHERE name = ?;`
        const { rows } = await knex.raw(query, [name])

        return rows[0]?.id
    }

    static async getCompanyById(id) {

        const query = `SELECT * FROM companies WHERE id = ?`
        const { rows } = await knex.raw(query, [id])

        return rows[0];
    }
}

module.exports = Companies;