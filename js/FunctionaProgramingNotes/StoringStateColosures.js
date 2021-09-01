
// outter function stores variable counter
// return reutrns and anonymous function that increments the value of the counter

const counterFunction = () => {
  let counter = 0;
  return () => {
    counter ++;
    return counter;
  }
}

const incrementer = counterFunction(2);

console.log(incrementer(), "[1]")
console.log(incrementer(), "[2]")
console.log(incrementer(), "[3]")
console.log(incrementer(), "[4]")
console.log(incrementer(), "[5]")
console.log(incrementer(), "[6]")
console.log(incrementer(), "[7]")
console.log(incrementer(), "[8]")