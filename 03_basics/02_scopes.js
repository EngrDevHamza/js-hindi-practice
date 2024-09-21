var c = 100 // this will not be output as fucntions c will be be output

let a = 200

//The above are global scope whereas the value in if conditions are block scope

if (true){
    let a = 10
    const b = 20
    var c = 30  //we are not returning any value
    // console.log("Inner value:", a);
    

}

// console.log(a); will show error that it's not defined as it is in scope of if
// console.log(b); will show error that it's not defined as it is in scope of if
// console.log(c); //show the value of c therfore we don't use var

// console.log(a);


function one(){
    const username = "Hamza"

    function two(){
        const city = "Islamabad"
        console.log(username)
        
    }
    // console.log(city);
    
     two()
}
// one()

if (true){
    const username = "Ahmed"
    if (username === "Ahmed")
    {
        const secondName = " Bajwa"
        // console.log(username + secondName);
        
    }
    // console.log(secondName); out of scope
}
// console.log(username); out of scope


// +++++++++++++++++++++++++++++++++++ Interersting +++++++++++++++++++++++++++++++ //
// console.log(addOne(5))

function addOne(num){
    return num + 1
}

addOne(5)

// above is the pure function while below is expression in which function is stored in varialbe which is more powerful.

// console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}

addTwo(5) //this can't be accessed before declaration the above function can be accessed before delceration
