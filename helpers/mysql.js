const mysql = require("mysql");
const config = require("../config/config");

const pool = mysql.createPool({
  connectionLimit: 5,
  host: config.databaseHost,
  user: config.databaseUser,
  password: config.databasePassword,
  database: config.database,
  debug: false,
  multipleStatements: true
});

module.exports = pool;
