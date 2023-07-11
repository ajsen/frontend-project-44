export default (number1, number2) => {
  let result = 0;
  let i = 0;
  while (i <= number1 && i <= number2) {
    i += 1;
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }

  return result;
};
