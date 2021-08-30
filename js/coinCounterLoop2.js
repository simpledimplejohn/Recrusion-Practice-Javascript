const arrayChange = [
  { name: 'quarter', value: 25},
  { name: 'dime', value: 10},
  { name: 'nickel', value: 5},
  { name: 'penny', value: 1}
]
let quarters = 0
let dimes = 0
let nickles = 0
let pennies = 0

function changeFromAmount(change) {
  let i = 0;
  while (i < change) {
    quarters = Math.floor(change/arrayChange[0].value)
    dimes_change = change - quarters * arrayChange[0].value

    dimes = Math.floor(dimes_change/arrayChange[1].value)
    nickles_change = dimes_change - dimes * arrayChange[1].value

    nickles = Math.floor(nickles_change/arrayChange[2].value)
    pennies_change = nickles_change  - nickles * arrayChange[2].value

    pennies = Math.floor(pennies_change)
    

    i ++;
  }
  console.log("for change of: ", change)
  console.log("quarters = ", quarters)
  console.log("nickles = ", nickles)
  console.log("dimes = ", dimes)
  console.log("pennies = ", pennies)
}
//changeFromAmount(75)
//changeFromAmount(20)
// changeFromAmount(9)
changeFromAmount(69)


// 0 is greater than change we want change to go down in value