const multiplier = (numberToMultiplyBy) => {
  return (numberToMultiply) => {
    return numberToMultiplyBy * numberToMultiply;
  }
}
const doubler = multiplier(2);
const tripler = multiplier(3);
const quadrupler = multiplier(4);
