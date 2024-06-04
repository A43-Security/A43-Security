const express = require('express');
const authControllers = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get('/me', authControllers.showMe);
authRouter.post('/login', authControllers.loginEmployee);
authRouter.delete('/logout', authControllers.logoutEmployee);

module.exports = authRouter;