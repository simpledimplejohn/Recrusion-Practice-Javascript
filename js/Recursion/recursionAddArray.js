//  write a function that sums all the numbers up to a given number
numSum = 0

function sum(num) {
  // Step 1, first input hard coded
  // Also called the Base Case
  // if (isNaN(num)){
  //   return;
  // }
  if(num === 0) { // what is the simplest possible input
  return 0
  }
  else {
    // console.log("check ", num)
    return num + sum(num - 1)
  }
}

// tests
console.log(sum(0), "[0]")
console.log(sum(1), "[1]")
console.log(sum(5), "[15]")
console.log(sum(10), "[55]")
