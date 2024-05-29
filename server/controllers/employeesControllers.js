const Employees = require("../db/models/Employees");

exports.getAllEmployee = async (req, res) => {
    const employees = await Employees.listAllEmployees();
    res.send(employees)
}

exports.findEmployeeById = async (req, res) => {
    const { id } = req.body;
    const employee = Employees.findEmployeeById(id);

    if (!employee) res.sendStatus(404);
    res.send(employee);
}

exports.createEmployee = async (req, res) => {
    const { username, password, firstName, lastName, company, imageUrl} = req.body;
    const employee = Employees.createEmployee(username, password, firstName, lastName, company, imageUrl);

    res.send(employee);
}