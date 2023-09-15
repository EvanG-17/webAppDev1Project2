'use strict';

// import all required modules
const logger = require('../utils/logger');
const uuid = require('uuid');
const accounts = require ('./accounts.js');
const movielistStore = require('../models/movielist-store.js');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
    index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Movielist Dashboard',
      movielists: movielistStore.getUserMovielists(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    logger.info('about to render' + viewData.movielists);
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  },
  

  
  deleteMovielist(request, response) {
    const movielistId = request.params.id;
    logger.debug(`Deleting Movielist ${movielistId}`);
    movielistStore.removeMovielist(movielistId);
    response.redirect('/dashboard');
  },
  
  addMovielist(request, response) {
    const date = new Date();
    const loggedInUser = accounts.getCurrentUser(request);
    const newMovieList = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      picture: request.files.picture,
      date: date,
      movies: []
    };
    logger.debug("Creating a new Movielist" + newMovieList);
    movielistStore.addMovielist(newMovieList, function() {
      response.redirect("/dashboard");
    });
  }
};

// export the dashboard module
module.exports = dashboard;