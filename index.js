const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {
    config
} = require('dotenv')
const {
    corsConfig
} = require('./utils/constants');
const {
    connectToServer
} = require('./utils/helpers')
const usersRouter = require('./routes/users');

config()
const port = process.env.PORT;
const dbUrl = process.env.DB_URI;

app.use(cors(corsConfig));
app.use(bodyParser.json());

app.use('/users', usersRouter)

connectToServer(dbUrl, port, app)