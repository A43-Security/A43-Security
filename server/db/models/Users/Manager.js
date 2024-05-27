const knex = require('../knex');
const Post = require('./Post');

class Manager {
    static async create(username, password, firstName, lastName, company) {
    const query = `
      INSERT INTO manager (username, password, firstName, lastName, company)
      VALUES (?, ?, ?, ?, ?)
      RETURNING *;
    `;
        const { rows } = await knex.raw(query, [username, password, firstName, lastName, company]);
        return rows[0];
    }

    static async list() { // Get all
    const query = `
      SELECT * 
      FROM manager;
    `;
        const { rows } = await knex.raw(query);
        return rows;
    }

    static async findById(id) { // Get one
        const query = `
        SELECT *    
        FROM manager
        WHERE id=?
    `;
        const { rows } = await knex.raw(query, [id]);
        return rows[0];
    }

    static async findByName(username) { // Get one
       const query = `
       SELECT * 
       FROM manager
       WHERE username=?
    `;
        const { rows } = await knex.raw(query, [username]);
        return rows[0];
    }

    static async delete(id) { // Delete
        // First delete all associated posts from that fellow
        await Post.deleteAllPostsForFellow(id);

        const query = `
      DELETE FROM manager
      WHERE id=?
      RETURNING *
    `
        let { rows } = await knex.raw(query, [id]);
        return rows;
    }
}

module.exports = Manager;