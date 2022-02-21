const express = require('express');

// Get all routes
const itemRoutes = require('./routes/item');

const items = require('./models/items');// get it from model
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();

// Parse JSON objects
app.use(bodyParser.json());

// app.use(express.json());
app.use(express.static('dist'));

// Handle CORS
app.use(cors()); 

// define end-point initials based on module
app.use('/api', itemRoutes); //to use the item routes

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}!`));
