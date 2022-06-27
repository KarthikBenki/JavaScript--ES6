"use strict";


//letus create our own myreduce function
//In order to use Array.myreduce() we have to have myreduce()'s definition in Array.prototype.
Array.prototype.myreduce = function (callback, intialValue) {
  let accumulator = intialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
    // callback(previousValue, currentValue, currentIndex, array);
  }
  return accumulator;
};

let arr = [1, 2, 3, 4, 5];
//to find the sum of all the elements in an array
let sum = arr.myreduce(function (acc, curr) {
  acc += curr;
  return acc;
}, 0);

console.log(sum);

sum = arr.reduce(function (acc, curr) {
  acc += curr;
  return acc;
}, 0);

console.log(sum);

//to find a minimum value in given array
let min = "";
min = arr.myreduce((min, curr) => {
  if (curr < min) min = curr;
  return min;
}, 2);

console.log(min);


min = arr.reduce((min, curr) => {
    if (curr < min) min = curr;
    return min;
  }, 2);
  
  console.log(min);
