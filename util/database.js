// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-development',
//     password:'admin@root'
// })

// module.exports = pool.promise();


const Sequelize =  require('sequelize');

const sequelize = new Sequelize('node-development','root','admin@root',{
   dialect:'mysql',
   host:'localhost'
});

module.exports = sequelize;