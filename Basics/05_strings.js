const name = "Hamza"

const repoCount = 20

// console.log(name + repoCount);

// console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('NFSMW-2')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('F'));

const newGame = gameName.substring(0, 3)

// console.log(newGame);

const anotherGame = gameName.slice(0, 3)

// console.log(anotherGame);

const newString = "   Hamza   "

// console.log(newString)
// console.log(newString.trim())

const url = "https://hamzacom/webpage%20new"

console.log(url.replace("%20", "-"))
console.log(url.includes("need"));
console.log(gameName.split('-'));