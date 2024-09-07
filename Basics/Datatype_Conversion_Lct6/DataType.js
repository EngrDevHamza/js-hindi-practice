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

// console.log(stringNumber);
// console.log(typeof stringNumber);


//              Operations     //


let value = 4
let negvalue = -value

// console.log(negvalue);

let str1 = "hamza"
let str2 = "bajwa"

// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

/* don't use above methods they don't look good */

// console.log(+true)  not good method for conversion

let num1, num2 , num3

num1 = num2 = num3 = 2 + 2  // not to define multiple variables for same value

let gameCounter = 10
gameCounter++;
// console.log(gameCounter); postfix and prefix increment 

// postfix prints value then increment whereas prefix increments value then store it. 

// refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


