const express = require('express');
const app = express();
const propertyRoutes = require('./src/routes/propertyRoutes');

app.use(express.json());
app.use('/api', propertyRoutes);

module.exports = app;
