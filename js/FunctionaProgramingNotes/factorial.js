// ternary opperator  Different way of doing an if else statment 
// condition ? return if true : return if false

function factorial(n) {
  return ( n === 0)
    ? 1
    : n * factorial(n - 1)
  if (n === 0) return 1
  else reuturn :
}

function myManualSlice (arr, startIndex, endIndex) {
  const newArr = []

  for (let i = startIndex; i < endIndex; i++) {
    newArr.push(arr[i])
  }
  return newArr
}

let myOtherArray2 = myArray.slice()
// slice makes a new array


