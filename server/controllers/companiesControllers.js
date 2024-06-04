const Companies = require('../db/models/Companies')

exports.getAllCompanies = async (req, res) => {
    const companies = await Companies.getAllCompanies();
    res.send(companies);
};