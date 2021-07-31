const express = require('express');
const dotenv = require('dotenv');
const connect = require('./database/connection');
var cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
connect();

// load routers
app.use('/api', require('../server/routes/router'))

app.listen(PORT, ()=> console.log(`listening on port http://localhost:${PORT}/`))