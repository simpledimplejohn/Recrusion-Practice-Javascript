/*
https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/whiteboard-practice-project-euler

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

/*
Steps
find multiples of three
push into an array
find multiples of five
push these into the same array
loop through the array and sum all the integers
return the value
*/

console.log("first")
function addThousand() {
  let num = 10
  let numAdded = 0
  console.log("runs")
  let thousandArray = []
  for (let i = 0; i < num; i ++) {
    if(i % 3 === 0) {
      thousandArray[i] = i
    } else if (i % 5 === 0) {
      thousandArray[i] =+ i
    }
  }
  return thousandArray

}
console.log(addThousand())

// simpler way, just count if and add

console.log("Second")
function add(num) {
  let numAdded = 0
  console.log("runs")
  //let thousandArray = []
  for (let i = 0; i < num; i ++) {
    if(i % 3 === 0) {
      numAdded += i
    } else if (i % 5 === 0) {
      numAdded += i
    }
  }
  return numAdded

}
console.log("add(1000)", add(1000), "[233169]")