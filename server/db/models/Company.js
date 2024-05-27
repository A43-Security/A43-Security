const knex = require('./knex')
const Post = require('./Post')

class Company {
    static async create(name, managerId ) {
        const query = `
          INSERT INTO manager (name, managerId)
          VALUES (?, ?)
          RETURNING *;
        `;
            const { rows } = await knex.raw(query, [name, managerId]);
            return rows[0];
        }
}