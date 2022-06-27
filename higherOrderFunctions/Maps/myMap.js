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
//using inbuilt map function
let myOutput=myArr.map(divideBy2);
console.log("Using inbuilt map function ",myOutput);
//using custum mymap function
myOutput=myArr.mymap(divideBy2);
console.log("Using custum mymap function ",myOutput);

let newArray = [[1,2,3],[4,5,6],[7,8,9]];
myOutput = newArray.mymap((ele,i)=>{
    return ele[i];
})

console.log(myOutput);//[1,5,9]
