"use strict"

let set = `<h1>Set And Map</h1>`

document.getElementById('set_1').innerHTML=set;

//set

let myArray = [11,22,34,65,34];
console.log(myArray);
let mySet = new Set(myArray);
mySet.add('100');
console.log(mySet);
mySet.add({"a":1,"b":"2"})
console.log(mySet);
mySet.delete(22);
console.log(mySet);
console.log(mySet.has(22));//false
console.log(mySet.has(34));//false

// mySet.clear();
console.log(mySet);//after clearing elements 0
mySet.add("100");
mySet.add(21.25);

console.log(mySet.size);

//we can loop through
// using forEach
console.log("using for each");
mySet.forEach((value) => {
    console.log(value);
})

/*
map is  a key value pair
*/

let myMap = new Map([
    ['a1','Hello'],
    ['b2','GoodBye'],
    ['c3','GoodBye']
]);

console.log(myMap);
myMap.set('d4','Foo');//to add using key value pair
console.log(myMap);
myMap.delete('c3');//deleting using key
console.log(myMap);
console.log(myMap.get('d4'));

//weakSet
console.log('week set starts');

let carWeakSet = new WeakSet();
let car1 = {
    make:'Honda',
    model:'Civic'
}
carWeakSet.add(car1);

let car2 = {
    make:'Toyota',
    model:'Carmy'
}
carWeakSet.add(car2);

let car3 = {
    make:'Mercedes',
    model:'Benz'
}
carWeakSet.add(car3);

console.log(carWeakSet.has(car2));//true
carWeakSet.delete(car2);
console.log(carWeakSet.has(car2));//false
console.log(carWeakSet);


//weakMap
console.log('week map starts');

let carWeakMap = new WeakMap([
    [{id:1},{make:'Honda',model:'Civic'}],
    [{id:2},{make:'Toyota',model:'Carmy'}],
    [{id:3},{make:'Mercedes',model:'Benz'}]
]);//invalid


let key4={
    id:4
}
let honda = {
    make:'Suzuki',
    model:'Maruthi'
}
carWeakMap.set(key4,honda);
console.log(carWeakMap);









