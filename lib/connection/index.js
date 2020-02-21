const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createPool({
  connectionLimit : 10,
  host            : config.config.database.host,
  user            : config.config.database.user,
  password        : config.config.database.password,
  database        : config.config.database.db,
  charset         : 'utf8mb4'
});

module.exports = connection;
