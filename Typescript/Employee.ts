/*

Class - Blueprint/Structure to create an object

ES 6 - ECMA SCRIPT 6  - 2015

- Class is collection of properties(variables) and methods(function)
- ClassName should be similar to the fileName (Employee.ts - Employee)
- ClassName should always starts with a captial letter
Ex: - Employee, EmployeeDept

- Whenever you create a variable inside a class we do not need to mention let/const keyword
- without () - variable/properties
- Whwnever you create a function inside we do not need to mention the "function" keyword
to define a method inside a class
- with () - Function/Method


- Access Modifier - It is a permission to access a variable and method outside of a class
- public - Can be accessible anywhere inside the project
- private - Can only be accessible inside the same class
- Protected - Can be accessible inside the child class
- readonly - Cannot be modified
- static - It doesn't belong to the object. It cannot be accessible by an object of a class.
We can access static variable or methods directly by using the ClassName.

Ex: ClassName.property, ClassName.method()


Syntax:

class ClassName{

    key: datatype
    key1 :datatype

    constructor()




}


*/

class Employee{

    name: string 
    age : number
    gender: string 

    constructor(name:string, age:number, gender:string){
        this.name= name,
        this.age = age,
        this.gender= gender
    }




}

const emp = new Employee("Rahul", 34, "Male")
console.log(Employee.name);

const emp1 = new Employee("Priya", 25, "Female")
const emp2 = new Employee("Diyva", 26, "Female")

console.log(emp);






