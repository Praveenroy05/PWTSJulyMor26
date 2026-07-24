// Variable - Variable is a storage/container, which stores either a single value or multiple values

// There are 3 ways in which we declare a variable

// Syntax:
// Keyword(var/let/const) variableName = value - JS
// keyword(var/let/const) variableName:datatype(optional) = value - TS

let i = 10

// var - In modern JS & TS we do not use var keyword - ES6 - 2015
// let - If the value of the variable can change at any point of time
// const - To declare a constant variable


i = 90

const j:number = 90
// j = 100

// Scope of variable:

// 1. Local scoped variable - When you try to declare a variable inside  {...}
// 2. Global scoped variable - When you try to declare a variable outside of the {...}

let lang = "TS" // Global scoped variable

{
    const lang1 = "JS" // Local scoped variable
    console.log(lang);
    console.log(lang1)
}

console.log(lang)

var k = 10
var k = 100
var k = 1000
var k = 32434
console.log(k)



// let

// 1. Scope - Block level {...} or global scoped
// 2. Whenever we declare a variable using "let" keyword, we cannot declare the same
// variable multiple times but we can re-initialise the variable
// 3. It is not mandatory to assign the value of a variable at the time declaration


let var1 = 10 // initialization
// let var1 = 1000 // Re-declaration

var1 = 1000 // re-initialization
console.log(var1)

let var2 // Declaration

var2 = "TS"


// const

// 1. Scope - Block level {...} or global scoped
// 2. Whenever we declare a variable using "const" keyword, we cannot declare the same
// variable multiple times and cannot re-initialise the variable
// 3. It is mandatory to assign the value of a variable at the time declaration


const var3 = 1000
// var3 = 10000 // This is not possible

const var4 = "JS"





// let

// 1. Scope - Block level {...} or global scoped
// 2. Whenever we declare a variable using "let" keyword, we cannot declare the same
// variable multiple times but we can re-initialise the variable
// 3. It is not mandatory to assign the value of a variable at the time declaration

// const

// 1. Scope - Block level {...} or global scoped
// 2. Whenever we declare a variable using "const" keyword, we cannot declare the same
// variable multiple times and cannot re-initialise the variable
// 3. It is mandatory to assign the value of a variable at the time declaration

let a
const b = null



let l = 10 // Global

{
    let l = 90 // Local 
    console.log(l) // 10, 90
}

console.log(l) // 10
