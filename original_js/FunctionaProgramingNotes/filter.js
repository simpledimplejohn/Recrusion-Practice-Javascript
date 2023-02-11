//filter an array to contain numbers greater than 10
//functional because it puts it into a new array without changing the old one
const numArray = [7, 14, 32, 8];
const filteredArray = numArray.filter(e => e > 10);

console.log(filteredArray);