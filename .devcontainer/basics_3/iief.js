// Immediately Invoked Function Expression (IIFE)
// IIFE is a JavaScript function that runs as soon as it is defined.
// Syntax: (function() { // code })();

(function myUser() {
    console.log('IIFE');
})();

(() => {
    console.log('IIFE using arrow function');
})();

((name) => {
    console.log(`IIFE using arrow function with parameter: ${name}`);
})('RAM');

