var moment = require("moment");
var math = require("mathjs");

console.log("Hello");

var dates = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(dates);

console.log(math.log(10000, 10));

var name = "Philip",
  time = "today";

console.log(`Hello ${name} how are you ${time}`);
