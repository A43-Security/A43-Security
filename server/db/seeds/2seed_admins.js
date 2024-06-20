/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
require('dotenv').config();
const authUtils = require("../../utils/auth-utils")


exports.seed = async (knex) => {
    const sequenceName = 'employees_id_seq';


    const adminPass = process.env.ADMIN_PASS;
    const adminPass2 = process.env.ADMIN_PASS2;
   
    if (!adminPass || !adminPass2) {
      throw new Error('Environment variable ADMIN_PASS is not set');
    }
  
    // Hash the password
    const passwordHash = await authUtils.hashPassword(adminPass);
    const passwordHash2 = await authUtils.hashPassword(adminPass2)
  
    // Check if the sequence exists
    const sequenceExists = await knex.raw(`
      SELECT EXISTS (
        SELECT 1 
        FROM information_schema.sequences 
        WHERE sequence_name = '${sequenceName}'
      );
    `);
  
    if (!sequenceExists.rows[0].exists) {
      throw new Error(`Sequence ${sequenceName} does not exist`);
    }
  
    // Restart the sequence
    await knex.raw(`ALTER SEQUENCE ${sequenceName} RESTART WITH 1`);

    const company = await knex('companies').where({ name: 'Management' }).first();
    const companyId = company.id;

    return knex('employees').del()
      .then(function () {
        // Inserts seed entries
        return knex('employees').insert([
          { 
            username: 'Security123',
            password_hash: passwordHash,
            firstname: 'Allied',
            lastname: 'Allied', 
            ismanager: false,
            imageurl: 'default-placeholder',
            company: 'Management',
            company_id: companyId,
           },

           { 
            username: 'Security456',
            password_hash: passwordHash2,
            firstname: 'Allied',
            lastname: 'Allied', 
            ismanager: false,
            imageurl: 'default-placeholder',
            company: 'Management',
            company_id: companyId,
           },
        ]);
      });
  };