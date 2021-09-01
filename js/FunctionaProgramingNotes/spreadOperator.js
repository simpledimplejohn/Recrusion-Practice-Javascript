//Functional Programing
//Methods for changing objects without changing them

//start with cat object

const myCat = {
  name: "Murphy",
  age: 1
}

console.log("the object: ")
console.log(myCat)

// copy Objects
console.log("copy objects")
const anotherCat = {...myCat}
console.log(anotherCat)

// copy and change
console.log("copy and change")
const myCatGotOlder = {...myCat, age: 2}
console.log(myCatGotOlder)

// add a new property that was not there before
console.log("add property")
const myCatColor = {...myCat, color: "grey"}
console.log(myCatColor)

//merge objects
console.log("merge three objects")
const flagColor1 = { color1: "green" }
const flagColor2 = { color2: "blue" }
const flagColor3 = { color3: "red" }
const mergeFlags = {...flagColor1, ...flagColor2, ...flagColor3}
console.log(mergeFlags)

//Object.assign operator, another way to do it





