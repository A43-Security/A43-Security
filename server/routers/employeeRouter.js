const express = require('express');
const employeeControllers = require('../controllers/employeesControllers');

const employeeRouter = express.Router();

employeeRouter.post('/', employeeControllers.createEmployee);
employeeRouter.get('/', employeeControllers.getAllEmployee);

module.exports = employeeRouter;