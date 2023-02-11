// passing a function into a function

function add(num1, num2) {
    return num1 + num2
}

function printResult(sum) {
    return `The value of this equation is ${sum}.`
}

// console.log(printResult(add(5,7)));


// store an anomous function inside a variable??
// function expression 
const funkyVariable = function(arg) {
    return arg;
}

// console.log(funkyVariable("Hello!"))

// functions returning fuctions (need the double brackets()())
// closure
function doAThing() {
    return function() {
        return "A thing was done."
    }
}
// console.log(doAThing()())

// Closures
// passing functions into functions 

function welcome(salutation) {
    return function(yourName) {
        return `${salutation}! Nice to meet you, ${yourName}!`
    }
}
const heyThere = welcome("Hey There");
const hello = welcome("Hello")

// console.log(heyThere("john"));
// console.log(hello("john"))


const multiplier = (numberToMultiplyBy) => {
    return (numberToMultiply) => {
        return numberToMultiplyBy * numberToMultiply
    }
}

const five = multiplier(5);
const doubler = multiplier(2);
const tripler = multiplier(3);
const quadrupler = multiplier(4);

console.log(five(2), " should be ", 10);
console.log(tripler(5), " should be ", 15);