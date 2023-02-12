/*
Practice the following commands:
array.prototype.map
array.prototype.reduce
array.prototype.filter

similarities include:
- do not change the array but transfer changes to a new array
*/


// map is non destructive 

const numArray = [1,2,3,4];
let doubleArray = [];
// numArray.forEach(function(element) {
//     doubleArray.push(element *2)
// });

// console.log(numArray);
// console.log(doubleArray);

doubleArray = numArray.map(e => e * 3);

// console.log(doubleArray);

const newNumArray = [1,2,3,4]

const summedArray = newNumArray.reduce(function(value, element) {
    return element + value;
})

// console.log(summedArray)

const friends = [
    {
      name: "Jasmine",
      wantToDo: ["hike", "go out to eat", "swim"]
    },
    {
      name: "Ada",
      wantToDo: ["play games", "hike", "cook meals"]
    },
    {
      name: "Desmond",
      wantToDo: ["sleep", "swim", "play games"]
    },
    {
      name: "Andres",
      wantToDo: ["hike", "swim", "play games"]
    }
];

const toDos = friends.reduce(function(array, friend) {
    return array.concat(friend.wantToDo);
}, []);

console.log(toDos);

