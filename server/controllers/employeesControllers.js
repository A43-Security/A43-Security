const Employees = require("../db/models/Employees");

exports.getAllEmployee = async (req, res) => {
    const employees = await Employees.listAllEmployees();
    res.send(employees);
}

exports.findEmployeeById = async (req, res) => {
    const { id } = req.body;
    const employee = await Employees.findEmployeeById(id);

    if (!employee) {
        res.sendStatus(404);
    } else {
        res.send(employee);
    }
}

exports.createEmployee = async (req, res) => {
    const { username, password, firstname, lastname, ismanager, imageurl, company } = req.body;
    console.log(firstname, lastname)
    const employee = await Employees.createEmployee(username, password, firstname, lastname, ismanager, imageurl, company);
    
    res.send(employee);
}