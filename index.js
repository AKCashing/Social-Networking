const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Allow the server to listen for requests and send responses
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for running on port ${PORT}!`);
    });
});