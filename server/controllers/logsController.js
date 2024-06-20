const Logs = require("../db/models/MorningLogs");

exports.createLog = async (req, res) => {
    const { firstname, lastname, company } = req.body;

    const employee = await Logs.createLogs(firstname, lastname, company);
    
    res.send(employee);
}

exports.getAllLogs = async (req, res) => {
    const logs = await Logs.listAllLogs();
    res.send(logs);
}