const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
const personRoutes = require('./personRoutes'); // Correctly import the personRoutes
const menuItemRoutes=require('./menuItemRoutes')
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World');
});
app.use('/menu', menuItemRoutes);
app.use('/person', personRoutes); // Use the personRoutes
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
