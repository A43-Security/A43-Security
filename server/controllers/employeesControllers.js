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

exports.deleteEmployeeById = async (req, res) => {
    const { id } = req.body;
    console.log( id )
    const result =  await Employees.deleteEmployeeById(id)
     console.log(result.message)
    res.send(result.message)
}

exports.findEmployeeByCompany = async (req, res) => {
    const { company } = req.body
    const employees = await Employees.getEmployeeByCompany(company)
    if(!employees) {
        res.sendStatus(404)
    } else {
        res.send(employees)
    }
}

exports.createEmployee = async (req, res) => {
    const { username, password, firstname, lastname, ismanager, imageurl, company } = req.body;
    console.log("controller: " + imageurl)
    const employee = await Employees.createEmployee(username, password, firstname, lastname, ismanager, imageurl, company);
    
    res.send(employee);
}