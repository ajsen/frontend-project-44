const getRandomNumber = (max) => Math.round(Math.random() * max);

const getRandomNumberFromRange = (min, max) => getRandomNumber(max - min) + min;

const isEven = (num) => num % 2 === 0;

const getResultOfExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return "Operation does not exist. Available operations: '+', '-', '*'";
  }
};

const getGcdOfTwoGivenNumbers = (number1, number2) => {
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

const getProgression = (start, step, progressionLength) => {
  const progression = [];

  for (let i = start; progression.length <= progressionLength - 1; i += step) {
    progression.push(i);
  }

  return progression;
};

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export {
  getRandomNumber,
  getRandomNumberFromRange,
  isEven,
  getResultOfExpression,
  getGcdOfTwoGivenNumbers,
  getProgression,
  isPrime,
};
