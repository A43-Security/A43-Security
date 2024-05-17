const makeKnex = require('knex');
const knexConfigs = require('../knexfile.js'); // or wherever knexfile is
const env = process.env.NODE_ENV || 'development';
const knex = makeKnex(knexConfigs[env]);

module.exports = knex;