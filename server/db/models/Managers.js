const knex = require('../knex');
const authUtils = require('../../utils/auth-utils')
const Companies = require('../models/Companies')

class Managers {

    static async createManager(username, password, firstName, lastName, company) {
        const passwordHash = await authUtils.hashPassword(password);
        const companyId = await Companies.getCompanyId(company);

        const query = `INSERT INTO managers (username, password_hash, firstName, lastName, comapanie_id) VALUE (?, ?, ?, ?, ?) RETURNING*;`
        const { rows } = await knex.raw(query, [username, passwordHash, firstName, lastName, companyId]);

        return rows[0];
    }

    static async listAllManagers() { // Get all
        const query = `
      SELECT * 
      FROM managers;
    `;
        const { rows } = await knex.raw(query);
        return rows[0];
    }

    static async findManagerById(id) { // Get one
        const query = `
        SELECT *    
        FROM managers
        WHERE id=?
    `;
        const { rows } = await knex.raw(query, [id]);
        return rows[0];
    }

    static async findManagerByName(firstName, lastName) { // Get one

        const query = `
      SELECT * 
      FROM manager
      WHERE firstName=? AND lastName=?
    `;
        const { rows } = await knex.raw(query, [firstName, lastName]);
        return rows[0];
    }

    static async deleteManagerById(id) {
        try {
            await knex('managers')
                .where('id', id)
                .del();
            return { success: true, message: 'manager has been successfully deleted' };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }
}

module.exports = Managers;