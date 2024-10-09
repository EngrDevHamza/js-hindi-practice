const userEmail = []

// if (userEmail) {
//     console.log("got user email");
    
// }
// else {
//     console.log("dont get username");
    
// }

// falsy values 

// false, 0, -0, BigInt, NaN, "",null, undefined

// truthy value 

// "0", 'false', " " , [], {} , function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");   
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length===0) {
//     console.log("object is empty");
    
// }

// Nullish Coalesing Operator (??):  null and undefined operator

let val1;
// val1 = 5 ?? 10 // output 5
// val1 = null ?? 10 output 10
// val1 = undefined ?? 15 // output 15
// val1 = null ?? 10 ?? 15 // output 10

// console.log(val1);  // speical case in which when we get multiple values we use this so that we get one value... it is used to check value is not null

// Terninary Operator

// condition ? true : false

const chaiPrice = 90
chaiPrice >=80 ? console.log("more than 80"): console.log("less than 80");

