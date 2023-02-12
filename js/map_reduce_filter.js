// map is non destructive 

const numArray = [1,2,3,4];
let doubleArray = [];
// numArray.forEach(function(element) {
//     doubleArray.push(element *2)
// });

// console.log(numArray);
// console.log(doubleArray);

doubleArray = numArray.map(e => e * 3);

console.log(doubleArray);

