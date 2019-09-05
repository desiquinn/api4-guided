const knex = require('knex');
const dotenv = require('dotenv').config()

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);
