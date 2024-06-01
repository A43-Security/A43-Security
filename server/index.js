require('dotenv').config();
const express = require('express');

const logRoutes = require('./middleware/logRoutes')

const app = express();

const employeeRouter = require('./routers/employeeRouter')

app.use(logRoutes);
app.use(express.json())

app.use('/api/employee', employeeRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://192.168.1.203:${port}/`);
});