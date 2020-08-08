//const mysql = require('mysql');
const mysql = require('mysql2/promise');
const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "sale"
};
module.exports = mysql.createPool(config);

//module.exports pool;