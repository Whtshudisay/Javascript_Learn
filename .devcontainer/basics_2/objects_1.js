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
