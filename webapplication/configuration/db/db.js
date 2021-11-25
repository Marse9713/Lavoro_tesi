const mysql = require("mysql");
const { config } = require("process");
const dbConfig = require("../controller/dbconfig/dbconfig.js");

const pool = mysql.createPool({

    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB

});

module.exports = pool;