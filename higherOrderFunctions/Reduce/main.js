"use strict";
let reduce_1 = `<h1>Reduce Fuction Arrays<h1/>`;
document.getElementById("reduce_1").innerHTML = reduce_1;

//reduce is a function which reduces whole array into one variable
//it takes two arguments one is function and another is intial value of accumulator

/**
 * arr.reduce(function(acc,curr)=>{
 *
 * },initialValue of acc)
 */

let arr = [2, 4, 6, 8, 10];

let output = "";
//to find the sum
output = arr.reduce(function (sum, curr) {
  sum += curr;
  return sum;
}, 0);

console.log("The sum of all element sin an array ", arr, " is", output);

//to find max
output = arr.reduce(function (max, curr) {
  if (curr > max) max = curr;
  return max;
}, 0);

console.log("The max of all element sin an array ", arr, " is", output);


