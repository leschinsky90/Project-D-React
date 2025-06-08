import { IBullet } from "./bullet.type";
import { Directions } from "./movementDirections.type";
import { ITank } from "./tank.type";

type EnemyType = "basic" | "rapidFire" | "fast" | "armored";

export interface IEnemy {
  tank: ITank | null;
  directions: Directions;
  id: number | null;
  flashing: boolean;
  moveInterval: number | null;
  shotInterval: number | null;
  bullet: IBullet | null;
  score: number;
  hp: 1 | 2 | 3;
  type: EnemyType;
}

type E = 0 | 1 | 2 | 3;
type EA = [E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E];
export type DefaultEnemiesArray = EA;
