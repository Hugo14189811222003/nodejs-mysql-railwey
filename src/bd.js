const {createPool} = require('mysql2/promise');
const {BD_DATABASE, BD_HOST, BD_PASSWORD, BD_PORT, BD_USER,} = require('./config.js');
const pool = createPool({
    port: BD_PORT,
    user: BD_USER,
    password: BD_PASSWORD,
    database: BD_DATABASE,
    host: BD_HOST
});

module.exports = pool;