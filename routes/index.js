var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');



router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});


router.get('/api/:options', function(req, res, next){
  var option = req.params.options;
  if(option == 'restaurants') {
      Restaurant.findAll()
          .then(function (foundRestaurants) {
              res.json(foundRestaurants);
          })
          .catch(next);
  }
  else if (option == 'hotels') {
      Hotel.findAll()
          .then(function (foundHotels) {
              res.json(foundHotels);
          })
          .catch(next);
  }
  else if (option == 'activities') {
      Activity.findAll()
          .then(function (foundActivities) {
              res.json(foundActivities);
          })
          .catch(next);

  }
});

module.exports = router;
