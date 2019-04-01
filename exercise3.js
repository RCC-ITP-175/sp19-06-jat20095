console.log("exercise3.js start");
// INSTRUCTIONS
// Write a function named isMonday that accepts a string
// as an argument and uses a switch statement to determine
// if that string is equal to Monday.





























// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(isMonday('Monday')); //should return true
console.log(isMonday('Tuesday')); //should return false
console.log(isMonday('Wednesday')); //should return false
var date1 = new Date('April 1, 2019 03:24:00');
console.log(isMonday(date1.getDay())); //should return false
