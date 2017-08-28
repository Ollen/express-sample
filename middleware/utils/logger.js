const express = require('express');
const fs = require('fs');
const router = express.Router();

const uriLogger = (req, res, next) => {
    let now = new Date();
    let filename = `${now.getMonth()}-${now.getDate()}-${now.getFullYear()}`;    
    let logMessage = `${now.toUTCString()}\n${req.method}: ${req.originalUrl}`;
    fs.appendFile(`./logs/${filename}.log`, logMessage + '\n', err => {
        if (err) throw err.message;
    });
    next();
};

module.exports = uriLogger;