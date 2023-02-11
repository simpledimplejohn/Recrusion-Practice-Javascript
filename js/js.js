// console.log("you can run this");

const originalArray = [1,2,3];
const doubledArray = [];
originalArray.forEach(function(element) {
    const doubledElement = element * 2;
    doubledArray.push(doubledElement);
})
// console.log(originalArray);
// console.log(doubledArray);

// map is a funcional method
const newArray = originalArray.map(function(element) {
    return element * 2;
})
// console.log(originalArray);
// console.log(newArray);

function addOne(num) {
    return num + 1;
}

const num = 1;
const newNum = addOne(num);
// console.log(num, " ", newNum);

function guessMyNumber(num) {
    const myNumber = Math.floor(Math.random() * Math.floor(10)) + 1;
    if(num === myNumber) {
        return "you were right the number was ", myNumber;
    } else {
        return "Wrong ", num, " was not ", myNumber;
    }
}

// console.log(guessMyNumber(5));

function isFive(num) {
    if(num === 5) {
        return "five"
    } else {
        return "not five"
    }
}

console.log(isFive(5));


function guessMyNumber(num) {
    const myNumber = Math.floor(Math.random() * Math.floor(10) ) + 1;
    if (num === myNumber) {
      return "You guessed right!" 
    } else {
      return "That wasn't it."
    }
}
// console.log(guessMyNumber(5));