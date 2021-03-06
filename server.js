/**
 * A simple Express server.
 */

const express = require('express');
const hbs = require('hbs');
const kapino = require('./routes/kapino');
const uriLogger = require('./middleware/utils/logger');
const port = process.env.PORT || 3000;

let server = express();

server.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

server.use('/scripts', express.static(__dirname + '/bower_components'));
server.use(uriLogger);
server.use('/kapino', kapino);

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});