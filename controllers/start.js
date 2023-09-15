'use strict';

// import all required modules
const logger = require('../utils/logger');
const movielistStore = require('../models/movielist-store.js');
const accounts = require ('./accounts.js');

// create start object
const start = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // app statistics calculations

const movielists = movielistStore.getAllMovielists();

let numMovielists = movielists.length;

let numMovies = 0;

for (let item of movielists) {
    numMovies += item.movies.length;
}
    
    // display confirmation message in log
    logger.info('start rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Welcome to the Movie App!',
      totalMovielists: numMovielists,
      totalMovies: numMovies,
    };
    
    // render the start view and pass through the data
    response.render('start', viewData);
  },
};

// export the start module
module.exports = start;