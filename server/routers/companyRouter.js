const express = require('express');
const companiesControllers = require('../controllers/companiesControllers');

const companiesRouter = express.Router();

companiesRouter.get('/stores', companiesControllers.getAllCompanies);

module.exports = companiesRouter;