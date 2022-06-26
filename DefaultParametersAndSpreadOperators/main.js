"use strict"

let hello=`<h1>Default Parameters and Spread Operators</h1>`;

document.getElementById('hello').innerHTML=hello;

/*
this is common method every one use
*/
function greet($greeting){
    console.log($greeting);
}


greet("Hello");

const greetMe=(greeting="Hello World")=>{
    console.log(greeting);
}
greetMe();//here we have not passed any paramaters but still it is giving output


/*
spread operator
*/
///spread operator

//add the elements of existing array to new array

let args1 =  [1,2,3];

let args2 = [4,...args1,5,6]

console.log("args1 array contains "+args1);//123

console.log("args2 array contains "+args2);//412356

//pass elements of an array as arguumants to a function

let args = [1,2,3,4];
console.log(args)//[1,2,3,4]
console.log(...args)//1,2,3,4

function addThreeNumbers(x,y,z,a) {
    console.log(x-y+z+a);
}

addThreeNumbers(...args);//6

//copy arrays
let arr = [1,2,3];
let arr2 =[...arr];

arr2.push(4);
arr2.push(4);

console.log(arr2);//[1,2,3,4,4]

//concatenate arrays
let arr1 = [1,2,3];
let arr3 = [4,5,6];
//first way
arr2=arr1.concat(arr3)
console.log(arr2);
//using spread operator
arr1 = [...arr1,"test",...arr3];
console.log(arr1);//[1,2,3,'test',4,5,6]

//rest operator

function multiply(multiplier,...theArgs) {
    return theArgs.map((element)=>{
        return multiplier*element;
    })
}

//rest operator collects the elements and make them an array

let arary_1 = multiply(10,1,2,3);
console.log(arary_1);

