const knex = require('../knex')
const Post = require('./Post')

class Admin {
    static async create(username, password, firstName, lastName, company) {
        const query = `
          INSERT INTO Employee (username, password, firstName, lastName, company)
          VALUES (?, ?, ?, ?, ?)
          RETURNING *;
        `;
            const { rows } = await knex.raw(query, [username, password, firstName, lastName, company]);
            return rows[0];
        }
} 

module.exports = Employee;1