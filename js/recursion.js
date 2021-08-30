//solve with recursion
const incrementCounter = (counter) => {
  if (isNaN(counter)) { //termination case if it is not a number to prevent infinate looping
    return;
  }
  if (counter >= 3) {
    return counter;  //called the base case when it stops calling itself
  } else {
    console.log("recursive counter ", counter);
    return incrementCounter(counter + 1); //calls itself and adds 1 (the recursive part)
  }
}
incrementCounter(0);

//LIFO last in first out
//inner most function will complete first, outter most will complete last

