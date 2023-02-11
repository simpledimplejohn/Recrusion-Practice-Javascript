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

console.log(funkyVariable("Hello!"))