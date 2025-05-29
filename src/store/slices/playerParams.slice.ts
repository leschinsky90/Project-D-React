import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { playerInitial } from "../../assets/playerInitial";
import { ConvertMapType, IBullet } from "../../types";
import playerCanMove from "../../services/playerCanMove";

type Move = "up" | "down" | "left" | "right";

interface PlayerMovePayload {
  move: Move;
  map: ConvertMapType;
}

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
    playerMove(state, action: PayloadAction<PlayerMovePayload>) {
      const { move, map } = action.payload;
      const isCanMove = playerCanMove(map, state, move);
      if (isCanMove) {
        switch (move) {
          case "up": {
            state.tank.y -= 0.5;
            break;
          }
          case "down": {
            state.tank.y += 0.5;
            break;
          }
          case "left": {
            state.tank.x -= 0.5;
            break;
          }
          case "right": {
            state.tank.x += 0.5;
            break;
          }
          default:
            break;
        }
      }
    },
    playerTurn(state, action: PayloadAction<Move>) {
      state.tank.position = action.payload;
    },
    createBullet(state) {
      const bullet: IBullet = {
        type: "player",
        speed: 1,
        x: state.tank.x + 1,
        y: state.tank.y + 1,
      };
      state.bullets.push(bullet);
    },
  },
});

export const {
  appearPlayer,
  kickPlayer,
  addLife,
  takeLife,
  playerMove,
  playerTurn,
  createBullet,
} = playerParamsSlice.actions;
export default playerParamsSlice.reducer;
