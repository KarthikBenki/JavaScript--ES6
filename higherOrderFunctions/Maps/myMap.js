"use strict";

//letus create our own mymap function
//In order to use Array.mymap() we have to havemymap()'s definition in Array.prototype.

Array.prototype.mymap = function (callback) {
  //this refers to array which is calling mymap function
  const resultArray = [];
  let result = '';
  for (let index = 0; index < this.length; index++) {
    result=callback(this[index], index, this);
    resultArray.push(result);
  }
  return resultArray;
};

//let us use with our example
const divideBy2 = function(x){
    return x/2;
}
let myArr = [1,2,3,4,5];
let myOutput=myArr.map(divideBy2);
console.log("Using inbuilt map function ",myOutput);
myOutput=myArr.mymap(divideBy2);
console.log("Using custum mymap function ",myOutput);
