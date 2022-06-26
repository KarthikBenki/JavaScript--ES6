"use strict"

let hello=`<h1>String and Number Methods</h1>`;

document.getElementById('hello').innerHTML=hello;

let theString = 'Hello, my name is Karth and I Love javascript';

//startsWith();
//endsWith();
//includes();

//check everything in console
console.log(theString);
/**
 * returns boolean expression
 */
console.log(theString.startsWith('Hello'));

console.log(theString.startsWith('ello'));

console.log(theString.endsWith('javascript'));

console.log(theString.includes('I Love javascript'));

//number methods
//Hex
console.log(0xFF);//es5 supports//255
//bninary
console.log(0b1000)//8
//octal
console.log(0o543)//355
//Number methods
console.log(Number.isFinite(3))//true
console.log(Number.isFinite(Infinity))//false
console.log(Number.isFinite(NaN))//false//nan is not a number

console.log(Number.isNaN(3))//false
console.log(Number.isNaN(NaN))//true
console.log(Number.isInteger(1))//true
console.log(Number.isInteger(-1))//true
console.log(Number.isInteger(-1.1))//false


console.log(Number.isSafeInteger(-1))//true



