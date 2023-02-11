const numArray = [1, 2, 3, 4, 5];
let doubledArray = [];
numArray.forEach(function(element) {
  doubledArray.push(element * 2);
});
console.log(doubledArray);


const doubledArray2 = numArray.map(function(element) {
  return element * 2;
})
console.log(doubledArray2);