const express = require('express'),
    app = express(),
    morgan = require('morgan'),
    path = require('path');

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

require('./actions')(app);

module.exports = app;
