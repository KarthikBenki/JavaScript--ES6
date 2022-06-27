"use strict"

//letus create our own myfilter function
//In order to use Array.myfilter() we have to have myfilter()'s definition in Array.prototype.

Array.prototype.myfilter = function(predicate) {
    let filteredArray = [];
    let result='';
    for(let index = 0;index<this.length;index++) {
        result=predicate(this[index],index,this);
      if(result){
        filteredArray.push(this[index]);
      }
        
    }
    return filteredArray;
}

let myArray = [1,2,3,4,5];
let myOutput='';
//getting the odd numbers using inbuilt filter method
myOutput = myArray.filter((x)=>{
    return x%2;
})
console.log("using inbuilt filter method ",myOutput);
//getting the odd numbers using custom filter method
myOutput = myArray.myfilter((x)=>{
    return x%2;
})
console.log("using custom filter method ",myOutput);

//getting the  numbers > 2 using inbuilt filter method
myOutput = myArray.filter((x)=>{
    return x>2;
})
console.log("using inbuilt filter method ",myOutput);

//getting the  numbers > 2 using custom filter method
myOutput = myArray.myfilter(x=>x>2);
console.log("using custom filter method ",myOutput);



