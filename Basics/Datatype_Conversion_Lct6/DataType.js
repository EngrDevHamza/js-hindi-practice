//let score = "33abc"
//let score = null  //result 0 but it should not be compared with digit 0
//let score = undefined //NaN
let score = true // result is 1 for true and 0 for false

//console.log(typeof(score));
//console.log(typeof score);

let valueInNUmber = Number(score)
//console.log(typeof valueInNUmber);
//console.log(valueInNUmber);  //NaN  Not a number

//let isLoggedIn = 1 // => True
let isLoggedIn = "" // => False
//let isLoggedIn = "Hamza"  // =>Ture

let BooleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(BooleanIsLoggedIn)

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);
