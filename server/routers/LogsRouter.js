const express = require('express');
const logsControllers = require('../controllers/logsController');

const logsRouter = express.Router();

logsRouter.post('/', logsControllers.createLog);
logsRouter.get('/alllogs', logsControllers.getAllLogs);

module.exports = logsRouter;