var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('../models/day');

/*
*    Days:
*          route to get a list of all the days
*               get one specific day
*               delete one day
*               create a new day
*
*
* Attraction :
*          a route to add an attraction from that day
*          a route to remove an attraction from that day
* */


router.get('/api/days', function (req, res, next){
    Day.findAll({
        include : [{ all : true }]
        })
        .then(function(allDays){
            res.json(allDays);
        })
        .catch(next);
});

router.get('/api/days/:dayId', function(req, res, next){
    Day.findById(req.params.dayId)
        .then(function(dayId){
            res.json(dayId);
        })
        .catch(next);
});

router.delete('/api/days/:dayId', function(req, res, next){
    Day.findById(req.params.dayId)
        .then(function(actualday){
            actualday.destroy();
        })
        .catch(next);});

router.post('/api/days', function(req, res, next){
    Day.create(req.body)
        .then(function(newDay){
            res.json(newDay);
        })
        .catch(next);
});


