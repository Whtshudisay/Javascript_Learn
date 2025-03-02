const varNum = [1, 2, 3, 4, 5];

const initialValue = 1;
const mulNum = varNum.reduce((acc, curr) => acc * curr, initialValue);
console.log(mulNum);  