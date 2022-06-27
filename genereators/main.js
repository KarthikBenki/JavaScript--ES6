"use strict"

document.getElementById('generate').innerHTML = `<h1>Generators</h1>`;

/**
 * yeilding multiples from one function
 */

function *g1(){
    console.log("Hello");
    yield 'Yeild 1 ran...'
    console.log("World");
    yield 'Yeild 2 ran....'
    return 'Returned'
}

let g = g1();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

for(let x of g){
    console.log(x);
}