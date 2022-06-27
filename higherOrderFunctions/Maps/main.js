"use strict"

document.getElementById('map_1').innerHTML = `
<h1>Array Map function</h1>
`


// 1)array map function is use dto transform one array into updated array.
// 2)it is higher order function of java script

let arr = [1,2,3,4,5];

//to get the double the array
const double = (x)=>x*2;
let output = arr.map(double);
document.write("the double of given array ["+output+"],");
console.log(output);


//to get the triple the array
const triple = (x)=>x*3;
 output = arr.map(triple);
document.write("the triple of given array ["+output+"]");
console.log(output);

//to get the binary the array
const binary = (x)=>x.toString(2);
 output = arr.map(binary);
document.write("the triple of given array ["+output+"],");
console.log(output);

// the other syntax is to use function directly in the map function 

//to get a square of given number
output = arr.map(function(x){
    return x*x;
})

//using arrow functions
output = arr.map((x,i)=>{
    return x*x;
})

console.log("the squares of given array is ",output);




