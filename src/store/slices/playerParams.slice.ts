import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { playerInitial } from "../../assets/playerInitial";
import { IBullet } from "../../types";
type Move = "up" | "down" | "left" | "right";

export const playerParamsSlice = createSlice({
  name: "player",
  initialState: playerInitial,
  reducers: {
    appearPlayer(state) {
      state.tank.alive = true;
    },
    kickPlayer(state) {
      state.tank.alive = false;
    },
    addLife(state) {
      state.lifes++;
    },
    takeLife(state) {
      state.lifes--;
    },
    playerMove(state, action: PayloadAction<Move>) {
      switch (action.payload) {
        case "up":
          if (state.tank.y > 0) state.tank.y--;
          break;
        case "down":
          if (state.tank.y < 60) state.tank.y++;
          break;
        case "left":
          if (state.tank.x > 0) state.tank.x--;
          break;
        case "right":
          if (state.tank.x < 60) state.tank.x++;
          break;
        default:
          break;
      }
    },
    createBullet(state) {
      const bullet: IBullet = {
        type: "player",
        speed: 1,
        x: state.tank.x + 4,
        y: state.tank.y + 4,
      };
      state.bullets.push(bullet);
    },
  },
});

export const { appearPlayer, kickPlayer, addLife, takeLife, playerMove , createBullet} =
  playerParamsSlice.actions;
export default playerParamsSlice.reducer;
