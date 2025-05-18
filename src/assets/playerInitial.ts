import { IPlayer } from "../types";

export const playerInitial: IPlayer = {
  tank: {
    shield: false,

    x: 20,
    y: 60,
    position: "up",
    speed: 4,
    alive: true,
  },
  bullets: [],
  lifes: 3,
};
