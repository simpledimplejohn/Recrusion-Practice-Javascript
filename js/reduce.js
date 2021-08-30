//add up the elements of an array
const numArray = [3, 7, 5];
const summedArray = numArray.reduce(function(currentValue, element) {
  return element + currentValue;
}, 0);

console.log(summedArray);
//0 is a starting value of the element