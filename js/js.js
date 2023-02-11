// console.log("you can run this");

const originalArray = [1,2,3];
const doubledArray = [];
originalArray.forEach(function(element) {
    const doubledElement = element * 2;
    doubledArray.push(doubledElement);
})
console.log(originalArray);
console.log(doubledArray);

