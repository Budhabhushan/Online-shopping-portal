const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-development',
    password:'admin@root'
})

module.exports = pool.promise();