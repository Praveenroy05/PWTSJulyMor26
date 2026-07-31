// Functions - It is a set of instruction that perform a specific task

function loginIntoApplication(){
    // fill the username
    // fill the password - 
    // click on login button
}

// login()


// 100 TCs - 300 lines of code - 195

// Duplication - Solve the problem of duplication
// Maintaining - 100 Test Cases to fix the issue - 99 steps
// Reusability - We can reuse the code whenever we want


// 1. Named Function - Function declaration - If you want to reuse the function at multiple places
// 2. Anonymous Function - Function Expression - Callback function
// 3. Arrow Function (ES6 - 2015) - Lambda Function - Callback function
// 4. Constructor Function - Class 

// CallBack Function - A function which will be utilised as a parameter of another function 
// is known as call back function


// function login1(fun:Function){ // fun - callback function
//     fun()
// }

// login1(function(){
//     console.log("This is a call back");
    
// })

// 1. Named Function - Function Declaration - A function which will be declared along 
// with the name is known Function Declaration 

// Syntax:

/*

function functionName(parameters) // defining the function
{
    block of code
    return
}


functionName(argument) // calling the function

TS:

function functionName(parameter:datatype(optional)):returnType(optional)
{
    block of code
    return - return statement should be last statement inside the function body
    // void - Function is not returning anything
}

*/


// 1. Non-parameterised and non-returning function

function greet(){
    console.log("Hello, Welcome to Typescript") // log + enter
}

greet()



// 2. Non-parameterised and returning function

function greetings(){
    return "Welcome to Typescript"
}

let result = greetings()
console.log(result)

// 3. Parameterised and non-returning function

function login(username:string, password:string){
    console.log("Username is : ", username)
    console.log("Password is : ", password);
    console.log(result);
}

login("Test", "Test1")
login("Testing", "Test@123")


// 4. Parameterised and returning function

function add(a:number, b:number){ // a, b - Parameters
    return a+b
}

const sum = add(10,20) // 10,20 - Arguments
console.log(sum)

// What is diff between parameter and Arguments?
// Parameter  - It is a variable in the declaration of a function
// Argument - It is a value that is passed to the function when it is called


// let n = Function // Function Expression

// 2. Anonymous Function  - Function Expression - A function which will not have any name.
// A function which is declared without any name that function will store inside a variable
// The variable where we stored the function becomes the name of the name of function


// let fun = function(){

// }

// fun()

// Callback function - A function which will be utilised as a parameter of another function


function login1(fun:Function){ // fun - callback function
    fun()
}

login1(()=>{
    console.log("This is a call back function");
    
})


// Syntax:

/*

let variable = function(parameters)
{
   code
   return
}

variable(arguments)


*/

let message = function(name:string, age:number){
    console.log(`Your name is ${name} and age is ${age}`)
}

message("Rahul", 32)


// 3. Arrow function (=>) - Function Expression - Lambda function

// 1. This is also a part of anonymous function and will not have any name
// 2. This function will be declared by using (=>) arrow symbol after paranthesis
// 3. Arrow function use to shorten the number of lines of code
// 4. If there is only one line of code inside the function then we skip the 
// curly braces inside the arrow


function add1(a:number, b:number){
    console.log(a+b);
}


//Syntax:

/*

let var = (param:datatype)=>{
  code
}

*/

let sum1 = (a:number, b:number) => a+b

let res = sum1(10,90)

console.log(res);




// Default parameter and Optional Parameter

// Default parameter - A parameter which has a default value
// Optional Parameter (?) - A parameter which may or may not be provided with the 
// value during the function call

function sum2(a:number, b:number=50){
    console.log(a+b)
}

sum2(100, 100)
sum2(300)

// Method overloading is a process where you can declare the same method name with different parameter


function display(name:string, age?:number){
    console.log(name, age);
}

display("Priya")
display("Raj", 30)

// Assignment - Complete the "display" function by writing the logic to print only
// name if the age parameter has not given any value and print both name and age
// if the age value has also been given at the time of calling the function

