const knex = require('../knex');
const Companies = require('../models/Companies')
const authUtils = require('../../utils/auth-utils')

class Employees {
    #passwordHash = null

    constructor({ username, password_hash, firstname, lastname, ismanager, imageurl, company_id, company}) {
        this.username = username;
        this.#passwordHash = password_hash;
        this.firstname = firstname;
        this.lastname = lastname;
        this.ismanager = ismanager;
        this.imageurl = imageurl;
        this.company_id = company_id;
        this.company = company;
    }

    isValidPassword = async (password) => (
        authUtils.isValidPassword(password, this.#passwordHash)
    );

    static async createEmployee(username, password, firstName, lastName, ismanager = "FALSE", imageurl = 'default-placeholder', company) {
        const passwordHash = await authUtils.hashPassword(password);
        const company_id = await Companies.getCompanyId(company);
        console.log("model: " + imageurl)
        if (!company_id) {
            throw new Error('Company not found');
        }
        const query = `
            INSERT INTO employees (username, password_hash, firstname, lastname, ismanager, imageurl, company_id, company)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            RETURNING *;
        `;
        const { rows } = await knex.raw(query, [username, passwordHash, firstName, lastName, ismanager, imageurl, company_id, company]);
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
        console.log("company: " + company)

        const company_id = await Companies.getCompanyId(company)
        console.log("company Id: " + company_id)
        const query = `
        SELECT * FROM employees
        WHERE company_id = ?
        `
        const { rows } = await knex.raw(query, [company_id])
        return rows;
    }

    static async findByUsername(username) {
        const query = `
        SELECT employees.*, companies.name AS company_name 
        FROM employees 
        JOIN companies ON employees.company_id = companies.id 
        WHERE employees.username = ?
    `;
    const { rows } = await knex.raw(query, [username]);
    const user = rows[0];
    if (user) {
        user.company = user.company_name; // Add company name to the user object
        delete user.company_name; // Clean up the object if you want to keep the property names consistent
        return new Employees(user);
    }
    return null;
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
