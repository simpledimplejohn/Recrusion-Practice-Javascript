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

// HOW TO USE REDUCE 

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

// console.log(toDos);

const toDoTally = toDos.reduce(function(voteTally, toDo) {
    voteTally[toDo] = (voteTally[toDo] || 0) + 1;
    return voteTally;
}, {});

// console.log(toDoTally)

const mostPopular = Object.entries(toDoTally).sort(function(a,b) {
    return b[1] - a[1]
});

// console.log(mostPopular);


// HOW TO USE FILTER:

const employee = [
    {
        name: "Ada",
        role: "developer"
    },
    {
        name: "Tom",
        role: "HR"
    },
    {
        name: "Jasmine",
        role: "developer"
    },
    {
        name: "Hank",
        role: "admin"
    }
];

const developers = employee.filter(e => e.role === "developer")
console.log(developers);