const router = require('express').Router()
const {Task} = require('../db/models')
module.exports = router

// get /api/tasks
router.get('/', async (req, res, next) => {
  res.send("This is the Task get route")
})
