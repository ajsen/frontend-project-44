#!/usr/bin/env node
import _ from 'lodash';
import calculate from '../calculate.js';
import runGame from '../../src/index.js';

const intro = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getData = () => {
  const operand1 = _.random(1, 10);
  const operand2 = _.random(1, 10);
  const operator = operators[_.random(operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculate(operand1, operand2, operator);

  return [question, String(correctAnswer)];
};

runGame(getData, intro);
