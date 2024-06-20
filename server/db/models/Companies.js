const knex = require('../knex')

class Companies {

    static async getAllCompanies() {
        try {
            console.log("hit");
            const query = `SELECT * FROM companies;`;
            const { rows } = await knex.raw(query);
            console.log(rows); // Log the retrieved rows

            // If you want to return all companies
            return rows;

            // If you only want to return the ID of the first company
            // return rows[0]?.id; // Use optional chaining to avoid errors if rows is empty
        } catch (error) {
            console.error("Error fetching companies:", error);
            throw error; // Re-throw the error to handle it in the calling function
        }
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