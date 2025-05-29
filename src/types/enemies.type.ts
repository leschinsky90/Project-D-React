import { IBullet } from "./bullet.type";
import { Directions } from "./movementDirections.type";
import { ITank } from "./tank.type";

export interface IEnemy {
  tank: ITank | null;
  directions: Directions;
  index: number | null;
  flashing: boolean;
  moveInterval: number | null;
  shotInterval: number | null;
  bullet: IBullet | null;
  score: number;
}
export interface IArmoredEnemy extends IEnemy {
  hp: 1 | 2 | 3;
}

type E = 0 | 1 | 2 | 3;
type EA = [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E];
export type EnemiesArray = EA;
