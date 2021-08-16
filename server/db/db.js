const Sequelize = require('sequelize');

const db = new Sequelize('app_db', 'app_user', 'mysecretpassword', {
  dialect: 'postgres',
  host: 'some-postgres',
  logging: false 
});

module.exports = db;


// var sequelize = new Sequelize('database', 'username', 'password', {
//   host: "my.server.tld",
//   port: 12345
// })