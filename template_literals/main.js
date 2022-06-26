"use strict"
//one method
let template = '<h1>Hello</h1><p>This is a simple template in javascript</p>'

//second method

let template_1 = 
'<h1>Hello World</h1>'+
'<p>This is a simple template in javascript and this is using string concatination</p>';

//third method using backtics

let template_2 = 
`<h1>Hello World backticks</h1>
<p>This is a simple template in javascript and this is using backticks</p>`

let name_ = "John";

let template_3 = 
`<h1>Hello, ${name_} </h1>
<p>This is a simple template in javascript and this is using ${name_} sign after hello</p>`

const makeUpperCase=(word)=> {
    return word.toUpperCase();
}

let template_4 = 
`<h1>${makeUpperCase('hello')},${name_}</h1>
<p>Hey ${makeUpperCase(name_)} your name is in upper case</p>`




document.getElementById('template').innerHTML=template;
document.getElementById('template_1').innerHTML=template_1;
document.getElementById('template_2').innerHTML=template_2;
document.getElementById('template_3').innerHTML=template_3;
document.getElementById('template_4').innerHTML=template_4;