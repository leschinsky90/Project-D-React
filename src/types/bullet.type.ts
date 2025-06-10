import { Directions } from "./movementDirections.type";

export interface IBullet {
  type: "player" | "enemy";
  speed: number;
  lvl: number;
  x: number;
  y: number;
  direction: Directions;
  id: number;
}
