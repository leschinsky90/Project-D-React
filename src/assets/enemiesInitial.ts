import { IEnemy } from "../types/enemies.type";

export const BasicEnemyInitial: IEnemy = {
  directions: "down",
  id: null,
  flashing: false,
  moveInterval: null,
  shotInterval: null,
  bullet: null,
  score: 100,
  tank: null,
  hp: 1,
  type: "basic",
};

export const FastEnemyInitial: IEnemy = {
  directions: "down",
  id: null,
  flashing: false,
  moveInterval: null,
  shotInterval: null,
  bullet: null,
  score: 200,
  tank: null,
  hp: 1,
  type: "fast",
};

export const RapidFireEnemyInitial: IEnemy = {
  directions: "down",
  id: null,
  flashing: false,
  moveInterval: null,
  shotInterval: null,
  bullet: null,
  score: 300,
  tank: null,
  hp: 1,
  type: "rapidFire",
};

export const ArmoredEnemyInitial: IEnemy = {
  directions: "down",
  id: null,
  flashing: false,
  moveInterval: null,
  shotInterval: null,
  bullet: null,
  score: 400,
  tank: null,
  hp: 3,
  type: "armored",
};
