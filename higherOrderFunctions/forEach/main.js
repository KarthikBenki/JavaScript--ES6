"use strict"

//array forEach method

let nums = [10,19,17,18,15,13];
//forEach is a method that takes callback function as a argument and returns void
nums.forEach((num,i,nums)=>{
    console.log(num*2,i,nums);
})