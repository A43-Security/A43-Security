const express = require('express');
const employeeControllers = require('../controllers/employeesControllers');

const employeeRouter = express.Router()

employeeRouter.post('/', employeeControllers.createEmployee);


module.exports = employeeRouter;