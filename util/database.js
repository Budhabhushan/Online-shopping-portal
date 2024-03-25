// // const mysql = require('mysql2');

// // const pool = mysql.createPool({
// //     host:'localhost',
// //     user:'root',
// //     database:'node-development',
// //     password:'admin@root'
// // })

// // module.exports = pool.promise();


// // const Sequelize =  require('sequelize');

// // const sequelize = new Sequelize('shopping-portal','root','admin@root',{
// //    dialect:'mysql',
// //    host:'localhost'
// // });

// // module.exports = sequelize;

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient;

// let _db;
// const mongoConnect = (cb) =>{
//    MongoClient.connect(
//       'mongodb+srv://Bhushan:Bhushan%40123@cluster0.hhyq8d5.mongodb.net/Shopping-Portal?retryWrites=true&w=majority&appName=Cluster0'
//    ).then(client =>{
//     console.log('Connect!');
//     _db = client.db();
//     cb();
//    }).catch(err => {
//     console.log(err);
//     throw err
//    })
// }

// const getDb = () =>{
//    if(_db) {
//       return _db;
//    }
//    throw 'No Database found!'
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;