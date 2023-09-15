'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const movielist = require('./controllers/movielist.js');
const accounts = require ('./controllers/accounts.js');

// connect routes to controllers
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/movielist/:id', movielist.index);

router.get('/movielist/:id/deleteMovie/:movieid', movielist.deleteMovie);
router.post('/movielist/:id/addmovie', movielist.addMovie);

router.get('/dashboard/deletemovielist/:id', dashboard.deleteMovielist);
router.post('/dashboard/addmovielist', dashboard.addMovielist);

router.post('/movielist/:id/updatemovie/:movieid', movielist.updateMovie);



// export router module
module.exports = router;

