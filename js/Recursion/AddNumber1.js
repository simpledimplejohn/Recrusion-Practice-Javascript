// write a function that adds all the numbers in the sequence


function add(num) {
  let array = []
  let value = 0
  let arrayValue = 0

  for (let i = 0; i <=num; i++) {
    console.log(i)
    array.push(i)
    value += i
  }
  console.log(value)
  console.log(array)

  for (let j = 0; j < array.length; j ++) {
    arrayValue += array[j];
  }
  
  console.log(arrayValue)
  

}

add(5)

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);