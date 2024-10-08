// Immediately Invoked Function Expressions IIFE

// to overcome the global scope pollution we use IIFE 

(function code () {
    console.log("database connected");
    
})();  // here first brackets are used to wrap the function and second brackets are used for calling function we can't call function just with brackets only. we should use semi colon to end that invoked funtion

((name) => {
    console.log(`2nd database connected ${name}`);
    
})("ahmed")  // we can pass the parameters as well 

// Note: the first IIFE is "name IIFE" and second IIFE is "unnamed IIFE" for using 2 IIFE's we must have semi colon at the end of  first IIFE