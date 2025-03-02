//all JS values inheret truthyness or falsyness 
// flasy values are: false, 0, "", null, undefined, NaN
// truthy values are: everything else

const userInput = prompt("Enter something: ");
if (userInput) {
    console.log("Truthy");
}
else {
    console.log("Falsy");
}

