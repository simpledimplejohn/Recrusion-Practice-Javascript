

//call back
function add(num1, num2){
  return num1 + num2;
}
function printResults(sum) {
  return `The value of this equation is ${sum}.`
}

printResults(add(5, 7));