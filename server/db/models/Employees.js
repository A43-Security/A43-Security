const knex = require('../knex');
const Companies = require('../models/Companies')
const Managers = require('../models/Managers')
const authUtils = require('../../utils/auth-utils')

class Employees {
    static async createEmployee(username, password, firstName, lastName, company) {
        const passwordHash = await authUtils.hashPassword(password);
        const companyId = await Companies.getCompanyId(company);

        // console.log(companyId);
        // const managerId = await Managers.findManagerByName(managerFullName);

        const query = `
      INSERT INTO employees (username, password_hash, firstName, lastName, companie_id, manager_id, imageUrl)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      RETURNING *;
    `;
        const { rows } = await knex.raw(query, [username, passwordHash, firstName, lastName, companyId, managerId, imageUrl]);
        return rows[0];
    }

    static async listAllEmployees() { // Get all
        const query = `
      SELECT * 
      FROM employees;
    `;
        const { rows } = await knex.raw(query);
        return rows[0];
    }

    static async findEmployeeById(id) { // Get one
        const query = `
        SELECT *    
        FROM employees
        WHERE id=?
    `;
        const { rows } = await knex.raw(query, [id]);
        return rows[0];
    }

    static async findEmployeeByFirstName(name) { // Get one
        const query = `
      SELECT * 
      FROM employees
      WHERE firstName=?
    `;
        const { rows } = await knex.raw(query, [name]);
        return rows[0];
    }

    static async deleteEmployeeById(id) {
        try {
            await knex('employees')
                .where('id', id)
                .del();
            return { success: true, message: 'employee has been successfully deleted' };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }
}

module.exports = Employees;