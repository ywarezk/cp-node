const express = require('express');
const Task = require('../models').Task;

const tasksRouter = express.Router();

// /api/tasks/
tasksRouter.route('/')
    .get(
        async function(req, res) {
            const tasks = await Task.findAll();
            // const tags = await tasks[0].getTags();
            res.json(tasks);
        }
    )
    .post(
        async function(req, res) {
            const task = await Task.create(req.body);
            res.json(task);
        }
    )

module.exports = tasksRouter;