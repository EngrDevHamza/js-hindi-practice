// Singleton : an object made with constructor and its one of its kind. In this file we are working on object literals 
//Object.create

//Object literals

const mySym = Symbol("key1")

const User = {
    name : "Hamza",
    "full name" : "Hamza Khalid", // this can only be accessed by second method i.e console.log(User["full name"])
    [mySym]: "mykey1",
    age : 27,
    email: "abc@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(User.email);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[mySym]);

User.email = "xyz@gmail.com"
// Object.freeze(User)
User.email = "asd@gmail.com"

// console.log(User);


User.greeting = function(){
    console.log("Welcome to Practice")
}


User.greetingTwo = function(){
    console.log(`Welcome to Practice ${this.name}`)
}

console.log(User.greeting());
console.log(User.greetingTwo());