#!/usr/bin/env node
import _ from 'lodash';
import getGCD from '../getGCD.js';
import runGame from '../../src/index.js';

const intro = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const number1 = _.random(1, 50);
  const number2 = _.random(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGCD(number1, number2);

  return [question, String(correctAnswer)];
};

runGame(getData, intro);
