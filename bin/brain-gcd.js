#!/usr/bin/env node
import runGame from '../src/index.js';
import { introduction, gcdGame } from '../src/games/gcd-game.js';

runGame(gcdGame, introduction);
