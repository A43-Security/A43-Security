const knex = require('../knex');
const Companies = require('../models/Companies')
const authUtils = require('../../utils/auth-utils')

class Employees {
    #passwordHash = null

    constructor({ username, password, firstname, lastname, ismanager, imageurl, company }) {
        this.username = username;
        this.#passwordHash = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.ismanager = ismanager;
        this.imageurl = imageurl;
        this.company = company;
    }

    isValidPassword = async (password) => (
        authUtils.isValidPassword(password, this.#passwordHash)
    );

    static async createEmployee(username, password, firstName, lastName, ismanager = "FALSE", imageurl = 'default-placeholder', company) {
        const passwordHash = await authUtils.hashPassword(password);
        const companyId = await Companies.getCompanyId(company);

        if (!companyId) {
            throw new Error('Company not found');
        }

        const query = `
            INSERT INTO employees (username, password_hash, firstname, lastname, ismanager, imageurl, companie_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            RETURNING *;
        `;
        const { rows } = await knex.raw(query, [username, passwordHash, firstName, lastName, ismanager, imageurl, companyId]);
        return new Employees(rows[0]);
    }

    static async listAllEmployees() { // Get all
        const query = `
            SELECT * 
            FROM employees;
        `;
        const { rows } = await knex.raw(query);
        const employees = rows;

        return employees.map((employee) => new Employees(employee));
    }

    static async findEmployeeById(id) { // Get one
        const query = `
            SELECT *    
            FROM employees
            WHERE id = ?;
        `;
        const { rows } = await knex.raw(query, [id]);
        return new Employees(rows[0]);
    }

    static async findEmployeeByFirstName(name) { // Get one
        const query = `
            SELECT * 
            FROM employees
            WHERE firstname = ?;
        `;
        const { rows } = await knex.raw(query, [name]);
        return new Employees(rows[0]);
    }

    static async getEmployeeByCompany(company) {
        const companyId = Companies.getCompanyId(company)
        const query = `
        SELECT * FROM employees
        WHERE companie_id = ?
        `
        const { rows } = await knex.raw(query, [companyId])
        return rows;
    }

    static async findByUsername(username) {
        const query = `SELECT * FROM users WHERE username = ?`;
        const { rows } = await knex.raw(query, [username]);
        const user = rows[0];
        return user ? new Employees(user) : null;
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
