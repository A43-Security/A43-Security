const express = require('express');
const employeeControllers = require('../controllers/employeesControllers');

const employeeRouter = express.Router();

employeeRouter.post('/', employeeControllers.createEmployee);
employeeRouter.post("/employers", employeeControllers.findEmployeeByCompany);
employeeRouter.delete('/deleteEmployee', employeeControllers.deleteEmployeeById);

module.exports = employeeRouter;