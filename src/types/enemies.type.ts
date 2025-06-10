import { IBullet } from "./bullet.type";
import { Directions } from "./movementDirections.type";
import { ITank } from "./tank.type";

type EnemyType = "basic" | "rapidFire" | "fast" | "armored";

export interface IEnemy {
  tank?: ITank;
  directions: Directions;
  id?: number;
  flashing: boolean;
  moveInterval?: number;
  shotInterval?: number;
  bullet: IBullet | null;
  score: number;
  hp: 1 | 2 | 3;
  type: EnemyType;
}

type E = 0 | 1 | 2 | 3;
type EA = [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E];
export type DefaultEnemiesArray = EA;

export type INewEnemy = Record<string, E>;
