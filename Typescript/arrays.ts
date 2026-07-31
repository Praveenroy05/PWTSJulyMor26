// Arrays - []

let arr = [10,20, "TS", true]
// arrayName[index]
console.log(arr[0])


/*

1. Array is a collection of data, which can have different data types.
2. Array is an ordered collection, means we can also access the element from the array
by using the position (index)
3. Index starts with 0 in an array
4. Array is dynamic in size


*/

let array = [10,20,"Java", true, null, 23.45] 

// [0:10, 1:20, 2:"Java", 3:true, 4:null, 5:23.45]

console.log(array[4])



// Declaration of an array:

// 1. Using Array Literal - []
// 2. Using Array constructor - new Array()


// class Array{

// let name

//     constructor(name:string){
//       this.name = name
//     }
// }

// new Array("rahul")



// 1. Using Array Literal - []

// Syntax:

// let arrayName:datatype[] = [value1, value2,.....]

let arr1:number[] = [10,20,30,40]

let arr2 = [10,20,30,"Java", true, null]
console.log(arr2);



// 2. Using Array Constructor - new Array()
//Syntax: 
// let arrayName = new Array<datatype>(value1, value2)

let arr3 = new Array<number>(10,40,70,90)
console.log(arr3);


// ["iphone13", iphone14,...arr.at.]


let arr4 = [10,20,30,40,"pink", "orange", "TS"] // 7 - [0,1,2,3,4,5,6]
console.log(arr4[1])

// Using the loop to iterate through the element of array

// Traditional for loop

// length - It return the total number of elements available inside an array

console.log(arr4.length)
// arr4[index]

for(let i=0; i<arr4.length; i++) // i<7
{
    console.log(arr4[i]); 
}



// for of loop
// Syntax:

/*

for(let variable of arrayName)
{
    console.log(variable)
}

*/

console.log("****************************************")

for(let ele of arr4){
    console.log(ele)
}

console.log("***********Methods of an array*******************")


let arr5 = [1,2,"pink", "apple"]

// 1. push(ele1, ele2, ele3,....) - It adds the elements to the end of an array

// Syntax: arrayName.push(val1, val2,....)

console.log(arr5)
arr5.push(10, "TS")
console.log(arr5)


// 2. pop() - It removes the last element from an array
//SYntax:
// arrayName.pop()
const removedElement = arr5.pop()
console.log(removedElement)
console.log(arr5)


// 3. unshift(ele1, ele2, ele3)
// 4. shift()

// What is difference between push() and unshift() method
// What is difference between pop() and shift()





