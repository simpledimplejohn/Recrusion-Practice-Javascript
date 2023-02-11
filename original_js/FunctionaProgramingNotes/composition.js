// not inheritance


// canEat is a closure, enclosing the function inside the object
const canEat = function(creature) {
  const obj = {
    eat: function(food) {
      return `The ${creature} eats the ${food}.`
    }
  }
  return obj;
}

// creates a variable that holds the function call
const cat = canEat("cat")
// call the function later, encapsulated
// first variable adds to the outer function
// second variable adds to the inner function
console.log(cat.eat("cat food"))

//call it again
const dog = canEat("dog")
console.log(dog.eat("dog food"))

//to do something else create another seperate function
const canSleep = function(creature) {
  const obj = {
    sleep: function() {
      return `The ${creature} sleeps.`
    }
  }
  return obj;
}

// to call it: 
const potato = canSleep("potato")
console.log(potato.sleep())

//function factory
//assign both methods
//this is called a function literal with a variable state
//state will change btw which is not very functional

const sleepingEatingCreature = function(name) {
  let state = {
    name
  }
  return { ...state, ...canEat(state), ...canSleep(state) }
}


const platypus = sleepingEatingCreature("platypus")


console.log(platypus.name)
console.log(platypus.eat("food"))
