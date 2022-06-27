"use strict";

//letus create our own myforEach function
//In order to use Array.myforEach() we have to have myremyforEachduce()'s definition in Array.prototype.

Array.prototype.myforEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
  return;
};

let myArray = [1, 2, 3, 4, 5];
//using inbuilt forEach function
myArray.forEach((num) => {
  console.log(num);
});

//using custom forEach function
myArray.myforEach((num, i, nums) => {
  console.log(num, i, nums);
});
