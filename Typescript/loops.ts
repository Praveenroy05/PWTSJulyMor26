// Loops - Will execute the block of code {...} multiple times until the condition is false

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("******************************")

// for(let i=1; i<=50; i++){
//     console.log(i) 
// }


// 1. for loop
        // a. for loop  - traditional for loop - When we know that how many times we have to run the iteration
        // b. for of loop - Loop through iterable object like Array, string,...
        // c. for in loop - Loop through the properties of an object.
        // {key : value} - {name : "Rahul"} - Object
// 2. while loop - When we do not know how many times we have to run the iteration
// 3. do while loop - When we want to execute the block of code at least once before we check the condition


// Drop down - Countries  - for loop
// Calendar date , Pagination - while loop
// Login page - enter username/password - this will check a condition - do while


// 1. for loop

// Syntax:

// let m = 90 - initialization
// let n - declaration

/*

for(initialization; condition; increment/decrement)
{
    // block of code to ber executed
}


Initialization - Initialize the value of the variable to start the iteration
Ex: - let i = 1
Condition - Condition to check whether the loop should continue or not
Ex: - i <5 

Increment/decrement - Increase or decrease the value of the variable to move towards condition
Ex: - i++/i--

*/

// break - It terminates the loop
// continue - Skip the current iteration and continue with the next iteration

for(let i=1; i<=5; i++){ // i = 6 , 6<=5
    
    if(i==3){
        continue
    }  
    console.log(i) // 1 2 3 4 5
}

console.log("*******************************");


// 10 to 1

for(let i= 10; i>0; i--){
    console.log(i) 
}


// 2. while loop
// Syntax:

/*

Initialization - let j = 1

while(condition){
    // code to be executed
    increment/decrement
}


*/

let attempt = 0

while(attempt >3){
    console.log("Username or password is incorrect")
    attempt++;
}

// console.log("Your account have been locked for 24H");

// 3. do while loop

// Syntax:

/*
initialization

do{
    // block of code
}while(condition);


*/


let att = 0

do{
    console.log("Username or password is incorrect")
    att++
}while(att>3);



let array = [10,20,30,"TS", true]

/*

for(variable declaration of arrayName){
    // code
}

Variable - It will get one by one the value from the iterable object


*/

for(let ele of array){
    console.log(ele) 
}


let obj = {name: "Rahul", age:30, role: "SE", salary:100000}

console.log(obj.name)
console.log(obj["role"]);



for(let key in obj){
    console.log(key +":"+ obj[key]);
}