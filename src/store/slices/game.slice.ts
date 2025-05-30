import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import enemiesArray from "../../assets/levelAssets/enemiesArray";
import mapsArray, {
  convertMapsArray,
} from "../../assets/levelAssets/mapsArray";
import { ConvertMapType, Directions, IBullet } from "../../types";
import { playerInitial } from "../../assets/playerInitial";
import playerCanMove from "../../services/playerCanMove";
import { IGame } from "../../types/game.type";

const convertMaps = convertMapsArray();

const gameInitial: IGame = {
  gameState: {
    selectedLevel: 1,
    debugMode: true,
  },
  player: playerInitial,
  enemies: enemiesArray,
  maps: convertMaps,
  bullets: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState: gameInitial,
  reducers: {
    nextLevel(state) {
      if (state.gameState.selectedLevel < mapsArray.length)
        state.gameState.selectedLevel++;
    },
    prevLevel(state) {
      if (state.gameState.selectedLevel > 1) state.gameState.selectedLevel--;
    },
    debugModTurnOn(state) {
      state.gameState.debugMode = true;
    },
    debugModTurnOff(state) {
      state.gameState.debugMode = false;
    },
    addMap(state, action: PayloadAction<ConvertMapType>) {
      state.maps.unshift(action.payload);
    },

    appearPlayer(state) {
      state.player.tank.alive = true;
    },
    kickPlayer(state) {
      state.player.tank.alive = false;
    },
    addLife(state) {
      state.player.lifes++;
    },
    takeLife(state) {
      state.player.lifes--;
    },
    playerMove(state) {
      const direction = state.player.tank.direction;
      const isCanMove = playerCanMove(
        state.maps[state.gameState.selectedLevel - 1],
        state.player,
        direction
      );
      if (isCanMove) {
        switch (direction) {
          case "up": {
            state.player.tank.y -= 0.5;
            break;
          }
          case "down": {
            state.player.tank.y += 0.5;
            break;
          }
          case "left": {
            state.player.tank.x -= 0.5;
            break;
          }
          case "right": {
            state.player.tank.x += 0.5;
            break;
          }
          default:
            break;
        }
      }
    },
    playerTurn(state, action: PayloadAction<Directions>) {
      state.player.tank.direction = action.payload;
    },
    createPlayerBullet(state) {
      const createBulletId = () => {
        let id = Math.trunc(Math.random() * 1000 + 1);
        state.bullets.forEach((item) => {
          if (item.id === id) id = createBulletId();
        });
        return id;
      };
      const bullet: IBullet = {
        type: "player",
        speed: 1,
        x: state.player.tank.x + 1,
        y: state.player.tank.y + 1,
        direction: state.player.tank.direction,
        id: createBulletId(),
      };
      state.bullets.push(bullet);
      state.player.bullets.push(bullet);
    },
    removeBullet(state, action: PayloadAction<number>) {
      state.bullets = state.bullets.filter(
        (bullet) => bullet.id != action.payload
      );
    },
    updateBulletPosition: (
      state,
      action: PayloadAction<{ id: number; x: number; y: number }>
    ) => {
      const bullet = state.bullets.find(
        (bullet) => bullet.id === action.payload.id
      );
      if (bullet) {
        bullet.x = action.payload.x;
        bullet.y = action.payload.y;
      }
    },
  },
});

export const {
  nextLevel,
  prevLevel,
  debugModTurnOn,
  debugModTurnOff,
  addMap,
  appearPlayer,
  kickPlayer,
  addLife,
  takeLife,
  playerMove,
  playerTurn,
  createPlayerBullet,
  removeBullet,
  updateBulletPosition,
} = gameSlice.actions;
export default gameSlice.reducer;
