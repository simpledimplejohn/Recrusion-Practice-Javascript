//  write a function that sums all the numbers up to a given number
numSum = 0

function sum(num) {
  if(num === 0) { // what is the simplest possible input
  return 0
  }
  else {
    console.log(num, "times through")
    return num + sum(num - 1)  //the second number is the increment 
  }
}

// tests
//console.log("sum(0) =", sum(0), "[0]")
//console.log("sum(1) =", sum(1), "[1]")
//console.log("sum(5) =", sum(5), "[15]")
console.log("sum(10) =", sum(10), "[55]")

// sum(5)
// 5 + sum(4) should = 5 + 10 but then it runs again
// 4 + sum(3) should = 4 + 6 but then it runs again
// 3 + sum(2) should = 3 + 3 but then it runs again
// 2 + sum(1) should = 2 + 1 but then it runs again
// 1 + sum(0) is the base case num = 1 + 0 = 1
// this then runs up the previous functions and solves them
// in the function 2 + sum(1), sum(1) = 1 so its 2 + 1 = 3 this is then passed to the next function
// in the function 3 + sum(2), sum(2) = 3 so its 3 + 3 = 6  this is then passed to the next function
// in the function 4 + sum(3), sum(3) = 6 so its 4 + 6 = 10  this is then passed to the next function
// As this is the final function this will complete the function and return:
// in the function 5 + sum(4), sum(4) = 10 so its 5 + 10 = 15  