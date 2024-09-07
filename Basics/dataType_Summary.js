// 2 types of datatypes based on how they are stored

// primitive and non-primitive

// Primitive => call by value. they are given as a value not the reference of them and changes are made on the copy

// 7 types : String, Number, Boolean, Null (empty), undefined, Symbol, BigInt


// Note: JaveScript is dynamically typed language which means its types not need to be defined like

const score = 100
const score_1 = false 
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null
let userEmail; // => undefined

const Id = Symbol("123")
const anotherId = Symbol ("123")

// console.log(Id == anotherId); // => Flase

const bigNumber = 1231241231231123n


// Whereas typescript is statically typed langauge in which we need to define the dataype of the variable 

// const socre:number = 100


// Reference / Non-Primitive

// Array, Objects, Functions 

const heros = ["Superman", "Spiderman", "Ironman"]

let myObj = {
    name: "hamza",    
    age: 24 ,
    sex: "male",

}  // object is in curly braces

const myFunction = function(){
    console.log("my fucntion");
    
}

// console.log(typeof heros);




// ++++++++++++++++++ Memory 


// Stack (Primitive), Heap Memory (non-Primitive)

let myYoutubeName = "Pakistani_Ninja"

let anotherName = myYoutubeName
// console.log(myYoutubeName)

anotherName = "Hamzachannel"
// console.log(anotherName)

let userOne = {
    email : "userOne@gmail.com",
    password : "abc123",
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)