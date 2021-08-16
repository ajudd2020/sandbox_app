const Sequelize = require('sequelize');

const dbURL = process.env.DATABASE_URL || 'postgres://localhost:5432/todo_app'; 
const dbHost = process.env.DATABASE_HOST || ''; 

let config;
if (process.env.DATABASE_HOST) {
  config = {
    dialect: 'postgres',
    host: dbHost,
  }
} else {
  config = {
    dialect: 'postgres',
    host: 'localhost',
    logging: false 
  }
}

const dbUser = process.env.DATABASE_USER || ''; 
const dbPassword = process.env.DATABASE_PASSWORD || ''; 

const params = [dbURL];
if (process.env.DATABASE_USER) {
  params.push(dbUser)
  params.push(dbPassword)
}

const db = new Sequelize(...params, config);

module.exports = db;