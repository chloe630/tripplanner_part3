var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
   number: {
       type : Sequelize.INTEGER(1, 5),
       // validate : {
       //     max : 5
       // }
   }
});


module.exports = Day;
