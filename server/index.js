const express = require('express')
const app = express()

const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // Passes the request to the next middleware/controller
};

app.use(logRoutes)


app.listen(process.env.PORT, () => console.log(`listening at http://localhost:${process.env.PORT}`)); 