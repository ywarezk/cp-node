const express = require('express');
const Task = require('../models').Task;

const tasksRouter = express.Router();

// /api/tasks/
tasksRouter.get('/', async function(req, res) {
    const tasks = await Task.findAll();
    res.json(tasks);
})

module.exports = tasksRouter;