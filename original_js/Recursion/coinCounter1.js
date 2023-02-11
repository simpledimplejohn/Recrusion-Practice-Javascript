function changeFromNumber(quartersChange) {
  let quarters = 0;
  let dimes = 0;
  let nickles = 0;
  let pennies = 0;

  let dimesChange = 0;
  let nicklesChange = 0;

  console.log(quartersChange)
  //quarters
  if(quartersChange >= 75) {
    quarters = 3
    dimesChange = quartersChange - 75;
  } 
  else if (quartersChange >= 50) {
    quarters = 2
    dimesChange = quartersChange - 50; 
  }
  else if(quartersChange >= 25) {
    quarters = 1
    dimesChange = quartersChange - 25;
  } else {
    dimesChange = quartersChange;
  }
  //dimes
  if(dimesChange >= 20) {
    dimes = 2
    nicklesChange = dimesChange - 20;
  } else if(dimesChange >= 10 && dimesChange <= 20) {
    dimes = 1
    nicklesChange = dimesChange - 10;
  } else {
    nicklesChange = dimesChange
  }
  // nickles 
  if(nicklesChange >= 5 && nicklesChange <= 10) {
    nickles = 1
    pennies = nicklesChange -5
  } else {
    pennies = nicklesChange
  }
  // pennies
  



  console.log("number of quarters = ", quarters)
  console.log("number of dimes = ", dimes)
  console.log("number of nickles = ", nickles)
  console.log("number of pennies = ", pennies)
}
changeFromNumber(47)



/*
function changing(cash) {
  var stringNum = cash.toFixed(2)
  console.log(stringNum)
  let numString = parsInt(cash)
  100 - numString
  var lastTwo = stringNum.slice(-2)
  console.log(lastTwo[0], " ", lastTwo[1])
  change =
  99 3 quarters
  24  2 dimes
  4 penies
  9 =
  1 nickle

  
  
}
changing(01)
//coin breakdown:
// 0 = nothing
// 01 = 99 cents
// first 9 = no dimes
// second
// if num is > 25 then - 25 and add 
// if 24 

*/
