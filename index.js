'use strict';

const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Read environment variables from .env file
const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });

//setup PORT constants
const PORT = process.env.PORT || 5000;

//configure express server
const app = express();

// log all requests
app.use(morgan('common'));

// cors
app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes').init(app);

// error handler middleware
app.use(require('./middlewares/errorHandler').errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});