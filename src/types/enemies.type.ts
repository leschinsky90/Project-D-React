import { IBullet } from "./bullet.type";
import { ITank } from "./tank.type";

export interface IEnemy {
  tank: ITank | null;
  vector: 1 | 2 | 3 | 4;
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
