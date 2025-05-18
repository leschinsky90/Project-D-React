import { IArmoredEnemy, IEnemy } from "../types/enemies.type";

export const OrdinaryEnemyInitial: IEnemy = {
  vector: 1,
  index: null,
  flashing: false,
  moveInterval: null,
  shotInterval: null,
  bullet: null,
  score: 100,
  tank: null,
};

export const FastEnemyInitial: IEnemy = {
  vector: 1,
  index: null,
  flashing: false,
  moveInterval: null,
  shotInterval: null,
  bullet: null,
  score: 200,
  tank: null,
};

export const RapidFireEnemyInitial: IEnemy = {
  vector: 1,
  index: null,
  flashing: false,
  moveInterval: null,
  shotInterval: null,
  bullet: null,
  score: 300,
  tank: null,
};

export const ArmoredEnemyInitial: IArmoredEnemy = {
  vector: 1,
  index: null,
  flashing: false,
  moveInterval: null,
  shotInterval: null,
  bullet: null,
  score: 400,
  tank: null,
  hp: 3,
};
