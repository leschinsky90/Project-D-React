import { IEnemy } from "../types/enemies.type";
import enemiesArray from "./levelAssets/enemiesArray";

export const BasicEnemyInitial: IEnemy = {
  directions: "down",
  flashing: false,
  bullet: null,
  score: 100,
  hp: 1,
  type: "basic",
};

export const FastEnemyInitial: IEnemy = {
  directions: "down",
  flashing: false,
  bullet: null,
  score: 200,
  hp: 1,
  type: "fast",
};

export const RapidFireEnemyInitial: IEnemy = {
  directions: "down",
  flashing: false,
  bullet: null,
  score: 300,
  hp: 1,
  type: "rapidFire",
};

export const ArmoredEnemyInitial: IEnemy = {
  directions: "down",
  flashing: false,
  bullet: null,
  score: 400,
  hp: 3,
  type: "armored",
};

export const createEnemy = (
  id: number,
  selectedLevel: number,
  index: number,
  spawnPoint: { x: number; y: number }
): IEnemy => {
  const enemytypes = {
    0: BasicEnemyInitial,
    1: RapidFireEnemyInitial,
    2: FastEnemyInitial,
    3: ArmoredEnemyInitial,
  };
  type E = 0 | 1 | 2 | 3;

  const type: E = enemiesArray[selectedLevel - 1][index];
  const newEnemy: IEnemy = { ...enemytypes[type], id: id };
  const speed = newEnemy.type == "fast" ? 2 : 1;

  newEnemy.tank = {
    shield: false,
    x: spawnPoint.x,
    y: spawnPoint.y,
    direction: "down",
    alive: true,
    speed: speed,
  };
  return newEnemy;
};
