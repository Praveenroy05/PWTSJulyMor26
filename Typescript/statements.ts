// Conditional statement - It allows us to execute different block of code {...} based on
// different conditions

// 1. if statement - This will handle only the positive scenario
// 2. if else statement - This will handle both positive and negative
// 3. if else if statement - This will validate more than 1 condition
// 4. switch statement - This will also validate more than 1 condition
// 5. Ternary Operator (? :) - Short hand form if else statement


// 1. if statement - Country from a drop down - 250 - Singapore
// 2. if else statement - Check if the test have been passed or failed
// 3. if else if statement  - Cross browser testing or cross platform testing
// if(coutry == Singapore){
//     click on singapore
// }


// 1. if statement - It will execute a block of code only if he condition is true

// Syntax:

/*

The condition will be validated, if the condition is true if block of code will be executed
else if the condition is false nothing will happen

if(condition){
    // code
}

*/

let text = "Login"

if( text == "login"){
    console.log("Click on the login button");
}

// 2. if else statement - If the condition is true then if block of will be executed otherwise
// else block of code will be executed.

// Syntax:

/*

if(condition){
    // if block of code
}
else
{
    // else block of code
}


*/

let role = "Admin"

if(role == "Normal"){ // "Admin" == "Normal"
    console.log("Navigate to Admin page");
}
else{
    console.log("Navigate to the Normal user page");
}


// 3. if else if statement - Will validate multiple conditions, depedning on the 
// result of the condition the specific block of code will be executed

// Syntax:

/*

if(condition1){

    // Code - If the coniditon1 is true this block of code will be executed
}
else if(condition2){
    // Code - If the coniditon2 is true this block of code will be executed
}
else if(condition3){
  // Code - If the coniditon3 is true this block of code will be executed
}
else
{
    // Code - If all the previous coniditons are false this block of code 
    // will be executed
}


*/


// cross browser testing - chrome, firefox, safari
// Multi Env - qa, staging, production

const browser = "chrome"

if(browser == "chrome"){ // "edge" == "chrome"
    console.log("Launch the chrome browser");
}
else if(browser =="firefox"){ // "edge" == "firefox"
    console.log("Launch the firefox browser");
}
else if(browser == "safari"){ // "edge" == "safari"
    console.log("Lauch the safari browser");
}
else{
    console.log("Invalid browser");
}

// 4. switch statement - Switch will compare with the case value. It check if any case
// value is available as similar to the expression or not. If it is available it will
// directly jump to that particular block of code

// Inside switch break keyword is mandatory. It terminates the execution

// Syntax:

/*

switch(expression)
{
    case "value":
        // block of code
        break
    case "value1":
        // block of code
        break
    case "value2":
        // block of code
        break
    default:
        // block of code
}


*/


let broswerName = "edge"

switch(broswerName)
{
    case "chrome":
        console.log("Launch the chrome browser - switch");
        break
    case "firefox":
        console.log("Launch the firefox browser - switch");
        break
    case "safari":
        console.log("Launch the safari browser - switch");
        break
    default:
        console.log("Invalid browser - switch");
        
}

// When to us if else if statement
// 1. Range available in the condition - We have to if else if
// 2. Multiple datatypes to be available - name = "Rahul". salary = 100000
// 3. Logical operator for the validation  - &&, ||


// When to use switch statement
// 1. Simple validation with single datatype and single value to compare
// 2. Should not have any range
// 3. No Logical operator


// 5. Ternary Operator (? :) - This is similar to if else but it uses inline

// Syntax:

/*

(condition)? execute this if the condition is true : execute this if the condition is false

*/

// if else

/*

if(condition){
 //code
}
else{
    // code
}

*/


let age = 10;

// if(age >= 18){
//     console.log("You are eligible for voting");
// }
// else{
//     console.log("You are not eligible for voting");
// }


(age >= 18)? console.log("You are eligible for voting") : console.log("You are not eligible for voting")
// console.log(result);


// Assignment:

// Write a program to display the grade of a student
// >90 - A
// >80 && <90 - B
// >70 && <80 - C
// >50 && <70 - D
// <50 - Failed


