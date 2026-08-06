// 2. string - Sequence of chracters - string, text, word

    // 1. Single Quote ('') - String Literal
    // 2. Double Quote (" ") - String Literal
    // 3. Backtick (``) - Template Literal


    let singleQuote1 = 'This is a single quote string'
    let doubleQuote1 = "This is a double quote string"

    // There are 2 main purpose of defining the string by using backtick

    // 1. Multi-line string

    let multiline1 = `This is
    a multiline
    string`

    // 2. For string paramterization - Calling a variable inside a string - 
    // ${variableName} - Data driven testing
    
    let age1 = 30

    let message1 = `Your age is ${age1}`
    console.log(message1)

    let char = 'c'

    console.log("*********************************")

    let str = "Welcome to typescript"

    // 1. length - Returns the number of characters in a string
    // stringName.length
    console.log(str.length);

    // 2. charAt(index) - Returns the character available at the specified index
    // stringName.charAt(index)
    console.log(str.charAt(5))

    // "abcdabcd" - a2b2c2d2

    // 3. concat(string) - Merges all the string and returns a new string
    // strinName.concat(str1, str2,...)

    let str1 = "Hello Javascript "
    console.log(str.concat(str1))
    console.log(str1.concat(str));

    // 4. includes(searchString, startIndex?)
    // 5. indexOf(searchValue, startIndex?)
    // 6. lastIndexOf(searchvalue, startIndex?)

    // What is difference between slice() and substring()

    // 7. slice(startIndex?, endIndex?) - Returns the portion of string
    console.log(str.slice())
    console.log(str.slice(5))
    console.log(str.slice(5, 12))
    console.log(str.slice(12, 5))

    // 8. substring(startIndex, endIndex?) - Returns the portion of string
    console.log(str.substring(1));
    console.log(str.substring(5, 12));
    console.log(str.substring(12, 5))


    // 9. startsWith(string) - It checks if the string is starting with specified string
    // or character and return the boolean value
    
    console.log(str.startsWith("Welcome"))
    console.log(str.startsWith("w"))

    // 10. endsWith(string) - It checks if the string is ends with specified string
    // or character and return the boolean value


    // 11. toUpperCase() - It converts the string to upper case letter and reutrn the new string
    console.log(str.toUpperCase())
    console.log(str)

    // 12. toLowerCase() - It converts the string to lower case letter and reutrn the new string
    console.log(str.toLowerCase())

    let str2 = "  This is an element  "
    let str3 = "This is an element"

    console.log(str2.trim() == str3);
    

    // 13. trim() - It removes the leading and trailing whitespace from a string and return a new string
    console.log(str2.length);
    console.log(str2.trim().length);

    // 14. trimStart() - It removes the whitespace from the beginning
    // 15. trimEnd() - It removes the whotespace from the end

    // 16. split(separator) - Splits the string into an array of substring
    let str4 = "Apple Banana Mango Orange"
    console.log(str4.split(" "))

    let email = "praveen.roy@qamitra.com"
    let domain = email.split("@")
    console.log(domain[0]);
    let fullName = domain[0].split(".")
    console.log(fullName);

    // objects
    // class


    // Setup and installation of Playwright
    
    // npm install tsx
    // npm init playwright
    
    
    



    
    


    

    
    
    
    
    
    

    
    