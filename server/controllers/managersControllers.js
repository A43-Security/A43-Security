const Managers = require('../../server/db/models/Managers')

exports.getAllManagers = async (req, res) => {
    const managers = await Managers.listAllManagers();
    res.send(managers)
}

exports.findManagerById = async (req, res) => {
    const { id } = req.body;
    const manager = await Managers.findManagerById(id)

    res.send(manager);
}

exports.createManager = async (req, res) => {
    const { username, password, firstName, lastName, company } = req.body;
    const manager = Managers.createManager(username, password, firstName, lastName, company);

    res.send(manager);
}