/**
 * @module
 * The Kapino Express Router.
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.hbs');
});

router.get('/browse', (req, res) => {
    res.render('browse.hbs');
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});

module.exports = router;