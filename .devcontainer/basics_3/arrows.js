// 'this' keyword is used to refer to the object that is executing the current function. inshort it refers to current context.
const myUser = {
    name: 'RAM',
    location: 'Uttar Pradesh',
    objectFunction: function () {
        console.log(`Name = ${this.name} and his/her location = ${this.location}`);
        console.log(this);
    }
};

myUser.objectFunction();
myUser.name = 'SHREE RAM';
myUser.objectFunction();

function myFunction() {
    console.log(this);
}
myFunction();

const myUser2 = () => {
    console.log(this);
}
myUser2();

const add2Nums = (num1, num2) =>(num1 + num2);
console.log(add2Nums(5, 6));

