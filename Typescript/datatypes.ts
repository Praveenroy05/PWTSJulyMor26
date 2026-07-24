// Datatype - What type of data a variable is storing

// Java
// int i = 10

// Syntax:
// Keyword(var/let/const) variableName:datatype(Optional) = value

// TS -> Execute ->Converted into JS

// let e:any = 10
//  e = "TS"
//  e = true

// There are 2 types of datatypes:

// 1. Primitive data type - Only a single value

    // 1. number
    // 2. string
    // 3. boolean
    // 4. null
    // 5. undefined
    // 6. union (|) - Combination of multiple datatype (number | string)
    // 7. any
    // 8. void - Function


    // 1. number - Combination of integer(90,-87) and floating point number (67.345, -90.34)

    let num1 = 90.45 // Type Inference
    let num2:number = 45 // Type Annotation

    // typeof - which return the datatype of a variable

    console.log(typeof num1);
    console.log(typeof num2)
    

    // What is difference between Type Annotation and Type Inference

    // Whenever we define the datatype of a variable explicitly is known as Type Annotation
    // Whenever JS & TS is able to identify the datatype of a variable implicitly is known as Type Inference



    // 2. string - Sequence of chracters - string, text, word

    // 1. Single Quote ('') - String Literal
    // 2. Double Quote (" ") - String Literal
    // 3. Backtick (``) - Template Literal


    let singleQuote = 'This is a single quote string'
    let doubleQuote = "This is a double quote string"

    // There are 2 main purpose of defining the string by using backtick

    // 1. Multi-line string

    let multiline = `THis is
    a multiline
    string`

    // 2. For string paramterization - Calling a variable inside a string - 
    // ${variableName} - Data driven testing
    
    let age = 30

    let message = `Your age is ${age}`
    console.log(message)

    // 3. boolean - true/false
    let isAdmin = false
    let isEmployee = true

    console.log(5>20)
    
    // 4. null - Intentional absence of a value
    let num:null = null

    // 5. undefined - You have defined a variable but have not assigned any value to it

    let num3:undefined = undefined

    // Note: 1. By default any type of variable will have a value as "undefined"
    // 2. By default the datatype of a variable will be "any"

    let num4
    console.log(num4) // undefined
    
    // 6. union (|) - is known as union

    let num5 :(number| string|boolean) = 90
    num5 = "Python"
    num5 = true

    // 7. any - it is free to accept any type of datatype

    let num6:any = 10
    num6 = "TS"
    num6 = true
    num6 = null
    num6 = undefined
    console.log(num6)
    




// 2. Non-Primitive data type - More than 1 value
    // 1. Array
    // 2. String
    // 3. Object - {key:value}






