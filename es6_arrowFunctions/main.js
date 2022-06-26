"use strict";

let arrow_1 = `
<h1>ES6 Arrow functions</h1>
<p>Learn with Brad Traversy</p>
`;

let arrow = document.getElementById("arrow");
arrow.innerHTML = arrow_1;

//Arrow functions
//ctrl+. works as quick fix
//this is normal function
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  let that = this;
  return arr.map(function (x) {
    console.log(that.prefix + x);
  });
};

let pre = new Prefixer("Hello, ");
pre.prefixArray(["Brad", "Jeff", "Shima"]);

//using arrow functions
function Prefixer_1(prefix_1) {
  this.prefix_1 = prefix_1;
}

Prefixer_1.prototype.prefixArray = function (arr) {
  arr.map((x) => {
    console.log(this.prefix_1 + x);
  });
};

let pre_1 = new Prefixer_1("Hai, ");
pre_1.prefixArray(["Brad", "Jeff", "Shima"]);

//using normal function
let add = function (a, b) {
  let sum = a + b;
  console.log("using normal function "+sum);
  return false;
};

add(10, 29);

//using arrow function
let add_1 = (a, b) => {
    let sum = a + b;
    console.log("using arrow function "+sum);
    return false;
};

add_1(10,20);
