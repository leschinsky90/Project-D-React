import { Directions } from "./movementDirections.type";

export interface ITank {
  shield: boolean;
  x: number;
  y: number;
  direction: Directions;
  speed: 1 | 2;
  alive: boolean;
}
