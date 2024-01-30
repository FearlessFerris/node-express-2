/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client({
    username: 'marcus',
    password: 'USSKennedy23',
    database: 'bankly',
    hostname: 'localhost',
    port: 5432
});

client.connect();

module.exports = client;
