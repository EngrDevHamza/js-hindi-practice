// Object Singalton

// const tinderUser = new Object()

const tinderUser = {}
tinderUser.Id = "abc123"
tinderUser.email = "abc@gmail.com"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const newUser = {
    email: "some@gmail.com",
    username: {
        fullname: {
            firstname: "Hamza",
            lastname: "Khalid",
        }
    }
}

// console.log(newUser.username?.fullname.firstname);  // ? used when to check if available or not

const obj1 = {1: "abc", 2: "xyz"}
const obj2 = {3: "def", 4: "lmn"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const user = [                                          /// mostly we get data from backend in the form of array.
    {
        id: "123",
        email: "zxc@gmail.com"
    },    
    {
        id: "321",
        email: "ghj@gmail.com"
    },
    {
        id: "456",
        email: "adf@gmail.com"
    }
]

// console.log(user[1].email)      //accessing object inside the array.
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn")) //to check wether it has property or not 