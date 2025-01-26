function sayMyName() {
    console.log('SHREE RAM');
}

function saymyName(name) {
    console.log(name);
}

function returnString(name) {
    return name;
}

function add(num1, num2) {
    console.log(num1 + num2);
}

function arrFunction(arr) {
    console.log(arr[1]);
    console.log(`the length of arr is ${arr.length} and its second element is ${arr[1]}`);
}

let arr = [12, 54, 5, 67, 47, 468, 11];
arrFunction(arr);


function calculateCartPrice(...nums) {
    return nums;
}
console.log(calculateCartPrice(12, 34, 3, 55, 7));

function CartPrice(val1 , val2, ...nums) {
    return nums;
}
console.log(CartPrice(12, 34, 3, 55, 7));

let myUser = {
    name: 'RAM',
    location: 'Uttar Pradesh',
};
function objectFunction(anyObject) {
    console.log(`Name = ${anyObject.name} and his/her location = ${anyObject.location}`);
};
objectFunction(myUser);