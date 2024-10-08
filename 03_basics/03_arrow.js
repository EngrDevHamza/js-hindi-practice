const user =  {
    username: "Hamza",
    id: 4444,

    welcomemsg: function () {
        console.log(`${this.username}, This is welcome message`);
        // console.log(this) prints the complete current context
        
    }

}

// user.welcomemsg()  //output Hamza, this is welcome msg     this is used for only user context
// user.username = "Ahmed"
// user.welcomemsg()
// console.log(this)  // this will return empty as it refers to global scope and in global there is nothing

// Note in browser the global object is window which will be shown we we run console.log(this) command in browser


function code () {
    let username = "hamza"
    console.log(this.username); // undefined as 'this' only works with objects and not with functions
    
}

// code ()

// const code = () => {
//     let username= "hamza"
//     console.log(this.username); // same result as normal function
    
// }
// code()

// const addNum = (num1, num2) => {
//     return num1 + num2 
// }
// console.log(addNum(4, 4));

// const addNum = (num1, num2) => num1 + num2  //implicit return in which we don;t use paranthesis and return keyword  other is called explicit return
const addNum = (num1, num2) => ({username: "hamza"}) // to return object we MUST use round brackets 
console.log(addNum(4, 4));