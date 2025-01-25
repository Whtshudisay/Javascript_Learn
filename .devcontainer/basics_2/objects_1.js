//singleton
//Object.create

const myUser = {
    "full Name": "Yash Avjekar",
    age: 18,
    isLoggedin: true,
    email: 'xyz@gmail.com',
    streak: ['Monday', 'Tuesday', 'Saturday'],
    location: 'Bengaluru'
};

console.log(myUser)
console.log(myUser.location);
console.log(myUser['email']);
console.log(myUser["full Name"]);//best way to access data from OBJECTS

let max = 10;
let min = 1;

let date_info = {
    func1: function () {
        console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    },
    func2: function () {
        console.table(myUser);
    }
};

date_info.func1(); 
date_info.func2();

const mySym = Symbol("Key1");// interview 

Object.assign(myUser, { [mySym]: 'myKey1' });// interview
console.log(myUser);
console.log(myUser['mySym']);// interview
// console.log(typeof myUser["mySym"]); // interview

// Object.freeze(myUser);// any modification done to the elements of object wont be considered
// myUser["full Name"] = "Shree Ram";
// console.log(myUser);

const func3 = function () {
    console.log("Hello World I am Js User !");
};
myUser.greetings = func3;
console.log(myUser);
myUser.greetings();


