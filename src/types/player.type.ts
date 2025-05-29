import { IBullet } from "./";
import { ITank } from "./";

export interface IPlayer {
  tank: ITank;
  bullets: IBullet[];
  lifes: number;
  lvl: 0 | 1 | 2 | 3;
}
