require('dotenv').config();
const express = require('express');
const authRouter = require('../server/routers/authRouter');
const logRoutes = require('./middleware/logRoutes');

const app = express();

const employeeRouter = require('./routers/employeeRouter');
const handleCookieSessions = require('./middleware/handleCookieSessions');


app.use(logRoutes);
app.use(handleCookieSessions);
app.use(express.json());

app.use('/api', authRouter);
app.use('/api/employee', employeeRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://10.0.12.127:${port}/`);
});