#!/usr/bin/env node
import _ from 'lodash';
import isEven from '../isEven.js';
import runGame from '../../src/index.js';

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
  const question = _.random(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

runGame(getData, intro);
