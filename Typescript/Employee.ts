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

    constructor() - Special function which helps us in terms of initialising the 
    value of the variable of a class except static variables. It automatically gets
    called when an object of a class is created. It can take parameters to initalize 
    the properties of a class.

    constructor()


    this - Is a keyword which represents the current class object.



}


*/

class Employee{

    empName: string 
    empAge : number
    empID: number 
    empSalary : number
    static companyName = "ABC"

    constructor(name:string, age:number, id:number, salary:number){
        this.empName = name // emp.empName = "Rahul", emp2.empName = "Divya"
        this.empAge = age
        this.empID = id
        this.empSalary = salary 
    }

    employeeInformation(dept:string){
        console.log(this.empName, this.empAge, this.empID,  
            this.empSalary, dept) 
    }

    static displayCompany(){
        console.log(Employee.companyName);
    }
}

const emp = new Employee("Rahul", 34, 101, 100000)
console.log(emp.empName);
Employee.displayCompany()
emp.employeeInformation("IT")

const emp1 = new Employee("Priya", 25, 102, 200000)
emp1.employeeInformation("HR")
const emp2 = new Employee("Divya", 26, 103, 150000)
emp2.employeeInformation("IT")

console.log(emp);



// Inhertance - Acquiring the properties and methods from the parent class to the child class
// extends

class Manager extends Employee{

    bonus:number

     constructor(name:string, age:number, id:number, salary:number, bonus:number){
        super(name, age,id, salary)
        this.bonus = bonus     
    }

    displayManagerInfo(){
        this.employeeInformation("IT")
        console.log(this.bonus);
    }
}

const mgr = new Manager("Rahul", 34, 101, 100000, 10000)
mgr.displayManagerInfo()
mgr.employeeInformation("HR")





