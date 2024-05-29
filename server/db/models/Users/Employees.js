const knex = require('../knex');
const Post = require('./Post');

class Employee {
    static async create(username, password, firstName, lastName, company, imageUrl) {
    const query = `
      INSERT INTO Employee (username, password, firstName, lastName, company, imageUrl)
      VALUES (?, ?, ?, ?, ?)
      RETURNING *;
    `;
        const { rows } = await knex.raw(query, [username, password, firstName, lastName, company, imageUrl]);
        return rows[0];
    }

    static async list() { // Get all
    const query = `
      SELECT * 
      FROM employee;
    `;
        const { rows } = await knex.raw(query);
        return rows;
    }

    static async findById(id) { // Get one
        const query = `
        SELECT *    
        FROM employee
        WHERE id=?
    `;
        const { rows } = await knex.raw(query, [id]);
        return rows[0];
    }

    static async findByName(username) { // Get one
        const query = `
      SELECT * 
      FROM employee
      WHERE username=?
    `;
        const { rows } = await knex.raw(query, [name]);
        return rows[0];
    }

    static async editName(id, newUsername) { // Update
        const query = `
      UPDATE employees
      SET newUsername=?
      WHERE id=?
      RETURNING *
    `;
        const { rows } = await knex.raw(query, [newUsername, id]);
        return rows[0];
    }

    static async delete(id) { // Delete
        // First delete all associated posts from that fellow
        await Post.deleteAllPostsForFellow(id);

        const query = `
      DELETE FROM employee
      WHERE id=?
      RETURNING *
    `
        let { rows } = await knex.raw(query, [id]);
        return rows;
    }
}

module.exports = Employee;