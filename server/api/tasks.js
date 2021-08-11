const router = require('express').Router()
const {Task} = require('../db/models')
module.exports = router

// get /api/tasks
router.get('/', async (req, res, next) => {
  const tasks = await Task.findAll();
  res.send(tasks);
})

// post /api/tasks
router.post('/', async (req, res, next) => {
  try{
    const newTask = await Task.create(req.body)
    res.send(newTask)
  } catch (err) {
    console.log("ERROR IN API TASKS POST ROUTE", err)
  }
})
