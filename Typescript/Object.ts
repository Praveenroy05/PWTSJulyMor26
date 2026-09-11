// Objects  - Collection of key-value pair inside the {key: value}

// {name: 'Rahul', age :25}

// Key inside the object internally will be converted to string.

// this - It refers to the current class object

const obj = 

{
    name : "Priya",
    age: 27,
    city: "New Delhi",
    skills: ["TS", "JS"],
    fun: function(){
        console.log(this.name, this.age, this.skills);    
    }
}

console.log(obj.age);
obj.fun()

console.log(obj["skills"]);


const obj1 = {
    name: "Raj",
    age: 30,
    city: "New Delhi",
    skills: ["TS", "JS"],
    fun: function(){
        console.log(this.name, this.age, this.skills);    
    },
    address: {no:8, city: 123}
}

obj1.fun()
console.log(obj1.address.no)

const emp3 = 
{   name: 'Rahul', 
    age: 34, 
    gender: 'Male' 
}






