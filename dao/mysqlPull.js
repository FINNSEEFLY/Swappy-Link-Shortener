const mysql = require("mysql2/promise");
const config = require("./mySqlConfig")

const pool = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});


module.exports.mysql = pool;