require("dotenv").config();
const express = require("express");
const configureCors = require("./configs/cors");
const configureBodyParser = require("./configs/body-parser");
const limiter = require("./configs/limiter");
const main = require('./routes/main');
const app = express();
const createClient = require('./routes/create-client');
const listUsers = require('./routes/list-users');
const calculateRoute = require('./routes/calculate-route');

app.use(configureCors());
configureBodyParser(app);
app.use(limiter);

app.use('/api', main);
app.use('/api', listUsers);
app.use('/api', createClient);
app.use('/api', calculateRoute);

app.listen(process.env.API_PORT || 3000, () => {
  console.log(`Server is running on port: ${process.env.API_PORT || 3000}`);
});
