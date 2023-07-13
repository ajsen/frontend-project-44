#!/usr/bin/env node
import runGame from '../src/index.js';
import { introduction, calcGame } from '../src/games/calc-game.js';

runGame(calcGame, introduction);
