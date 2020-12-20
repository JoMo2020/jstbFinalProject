var moment = require('moment')
var unique = require('uniq');

var myDate = new Date();
var myCoolDate = moment(myDate).format('LL');

var myList = [1, 2, 1, 1, 1, 3, 3, 4, 5, 6, 4, 4, 7];

var myUniqueList = unique(myList);

console.log(myUniqueList);