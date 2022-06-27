"use strict";

let promise_1 = `
<h1>Promises</h1>
`;

document.getElementById("promise").innerHTML = promise_1;

//immidiately resolved
let myPromise = Promise.resolve("Foo");

myPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

let myNewPromise = new Promise((reslove, reject) => {
  setTimeout(() => reslove(4), 2000);
});

myNewPromise.then((response) => {
    response+=4;
    console.log(response);
});


function getData(method,url) {
    return new Promise((reslove, reject) =>{
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload=function(){
            if(this.status>=200 && this.status<300) {
                reslove(xhr.response);
            }else{
                reject({
                    status:this.status,
                    statusText:this.statusText
                });
            }
        }

        xhr.onerror=function(){
            reject({
                status:this.status,
                statusText:this.statusText
            });
        }
        xhr.send();
    })
}

getData('GET','https://jsonplaceholder.typicode.com/todos').then((response)=>{
    console.log(response);
    let todos = JSON.parse(response);
    let output = '';

    for (const todo of todos) {
        output+=`
        <li>
        <h1>${todo.title}</h1>
        <p>Completed:${todo.completed}</p>
        </li>
        `
    }

    document.getElementById('template').innerHTML = output;
})
.catch((error)=>{
    console.log(error);
})