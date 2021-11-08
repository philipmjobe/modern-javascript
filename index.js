var moment = require("moment");
var math = require("mathjs");

console.log("Hello");

var dates = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(dates);

console.log(math.log(10000, 10));
