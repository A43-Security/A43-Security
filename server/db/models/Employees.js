const knex = require('../knex');
const Companies = require('../models/Companies')
const authUtils = require('../../utils/auth-utils')

class Employees {
    static async createEmployee(username, password, firstName, lastName, ismanager = "FALSE", imageurl = 'default-placeholder', company) {

        const passwordHash = await authUtils.hashPassword(password);
        const companyId = await Companies.getCompanyId(company);

        if (!companyId) {
            throw new Error('Company not found');
        }

        const query = `
            INSERT INTO employees (username, password_hash, firstname, lastname, ismanager, imageurl, companie_id)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
        const { rows } = await knex.raw(query, [username, passwordHash, firstName, lastName, ismanager, imageurl, companyId]);
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
            WHERE id = ?;
        `;
        const { rows } = await knex.raw(query, [id]);
        return rows[0];
    }

    static async findEmployeeByFirstName(name) { // Get one
        const query = `
            SELECT * 
            FROM employees
            WHERE firstname = ?;
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
