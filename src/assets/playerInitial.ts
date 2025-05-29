import { IPlayer } from "../types";

export const playerInitial: IPlayer = {
  tank: {
    shield: false,

    x: 10,
    y: 30,
    position: "up",
    speed: 1,
    alive: true,
  },
  bullets: [],
  lifes: 3,
  lvl: 0,
};
