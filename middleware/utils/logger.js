/**
 * @module
 * Logging Middleware
 */
const express = require('express');
const fs = require('fs');
const router = express.Router();

/**
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * An Express middleware that logs the URI and its request method.
 */
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