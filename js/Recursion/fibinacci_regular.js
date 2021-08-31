// 0 1 1 2 3 5 8 13 21 
// Recursion calling upon itself
// base point and termination case
// first and second number and add them

// console.log("works")
// function fib (num) {
//   firstNum = 0
//   secondNum = 1
//   thirdNum = 0
//   j = 0
//   for (let i = 0; i <= num; i ++) {
//     j ++
//     console.log(i," ", j) 
//     thirdNum = secondNum + firstNum

//   }
// }
// fib(5)
let i = 0

function fib2 (num) {
  
  if (num === 0)
    return 0
  else if (num === 1)
    return 1
  else 
    i ++
    console.log(i, num)
    return fib2(num - 1) + fib2(num - 2)
}
fib2(5)

  //         fib2 (4) 
  //     fib2(4-1)  fib2(4-2)
  //   fib2(3-1)      fib2(2-2)
  // fib2(2-1)> 1          fib2(0) > 0