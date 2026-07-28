// Functions - It is a set of instruction that perform a specific task

function login(){
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


function login1(fun:Function){ // fun - callback function
    fun()
}

login1(function(){
    console.log("This is a call back");
    
})