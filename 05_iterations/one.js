// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("number us five")
    }
    // console.log(element);    
}

for (let i = 0; i <= 2; i++) {
    // console.log(`Outer loop: ${i}`);
    
    for (let j = 0; j <=15; j++) {
        const element = j;
        // console.log(`Inner loop: ${j}`);      
    }
}

let myarray = ["batman","Spuerman", "Spiderman"]
// console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        // console.log(`5 detected`);
        // break
    }
    // console.log(`index is ${index}`);
    
    
}
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`5 detected`);
        continue
    }
    console.log(`index is ${index}`);
    
    
}