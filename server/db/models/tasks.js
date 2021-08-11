const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
  task: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  priority: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Task;
