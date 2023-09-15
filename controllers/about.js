'use strict';

// import all required modules
const logger = require('../utils/logger');
const developerStore = require('../models/developer-store.js');
const accounts = require ('./accounts.js');

// create about object
const about = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('about rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'About the Movie App',
      developers: developerStore.getAllDevelopers(),
    };
    
    // render the about view and pass through the data
    response.render('about', viewData);
  },
};

// export the about module
module.exports = about;