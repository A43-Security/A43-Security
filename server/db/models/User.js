const knex = require('./knex');
const Post = require('./Post');

class User {
    static async create(name) {
        const query = `
      INSERT INTO users (name)
      VALUES (?)
      RETURNING *;
    `;
        const { rows } = await knex.raw(query, [name]);
        return rows[0];
    }

    static async list() { // Get all
        const query = `
      SELECT * 
      FROM users;
    `;
        const { rows } = await knex.raw(query);
        return rows;
    }

    static async findById(id) { // Get one
        const query = `
        SELECT *    
        FROM users
        WHERE id=?
    `;
        const { rows } = await knex.raw(query, [id]);
        return rows[0];
    }

    static async findByName(name) { // Get one
        const query = `
      SELECT * 
      FROM users
      WHERE name=?
    `;
        const { rows } = await knex.raw(query, [name]);
        return rows[0];
    }

    static async editName(id, newName) { // Update
        const query = `
      UPDATE users
      SET name=?
      WHERE id=?
      RETURNING *
    `;
        const { rows } = await knex.raw(query, [newName, id]);
        return rows[0];
    }

    static async delete(id) { // Delete
        // First delete all associated posts from that fellow
        await Post.deleteAllPostsForFellow(id);

        const query = `
      DELETE FROM users
      WHERE id=?
      RETURNING *
    `
        let { rows } = await knex.raw(query, [id]);
        return rows;
    }
}

module.exports = User;