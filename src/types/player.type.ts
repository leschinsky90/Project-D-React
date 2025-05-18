import { IBullet } from "./";
import { ITank } from "./";

export interface IPlayer {
  tank: ITank;
  bullets: IBullet[];
  lifes: number;
}
