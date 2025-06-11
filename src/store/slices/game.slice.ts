import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mapsArray, {
  convertMapsArray,
} from "../../assets/levelAssets/mapsArray";
import { ConvertMapType, Directions, IBullet, mapObject } from "../../types";
import { playerInitial } from "../../assets/playerInitial";
import playerCanMove from "../../services/playerCanMove";
import { IGame } from "../../types/game.type";
import { createEnemy } from "../../assets/enemiesInitial";

const convertMaps = convertMapsArray();

const gameInitial: IGame = {
  gameState: {
    selectedLevel: 1,
    debugMode: true,
  },
  player: playerInitial,
  enemies: {
    levelEnemies: [],
    lastEnemySpawnTime: 0,
    nextSpawnPoint: 0,
    index: 0,
  },
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
      else state.gameState.selectedLevel = 1;
    },
    prevLevel(state) {
      if (state.gameState.selectedLevel > 1) state.gameState.selectedLevel--;
      else state.gameState.selectedLevel = mapsArray.length - 1;
    },
    debugModTurnOn(state) {
      state.gameState.debugMode = true;
    },
    debugModTurnOff(state) {
      state.gameState.debugMode = false;
    },
    updateMap(
      state,
      action: PayloadAction<{ x: number; y: number; value: mapObject }>
    ) {
      const { x, y, value } = action.payload;
      const map = state.maps[state.gameState.selectedLevel - 1];

      if (map && map[y] && map[y][x] !== value) map[y][x] = value;
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
        state.enemies.levelEnemies,
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
        lvl: state.player.lvl,
        x: state.player.tank.x + 1,
        y: state.player.tank.y + 1,
        direction: state.player.tank.direction,
        id: createBulletId(),
      };
      if (state.player.lvl > 0) bullet.speed = 2;
      if (
        state.player.bullets.length == 0 ||
        (state.player.lvl >= 2 && state.player.bullets.length == 1)
      ) {
        state.bullets.push(bullet);
        state.player.bullets.push(bullet);
      }
    },
    bulletCollision(state, action: PayloadAction<number>) {
      state.bullets = state.bullets.filter(
        (bullet) => bullet.id != action.payload
      );
      state.player.bullets = state.player.bullets.filter(
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
    spawnEnemy(state) {
      const createEnemyId = () => {
        let id = Math.trunc(Math.random() * 1000 + 1);
        state.enemies.levelEnemies.forEach((item) => {
          if (item.id === id) id = createEnemyId();
        });
        return id;
      };

      const spawnPoints = [
        { x: 0, y: 0 },
        { x: 15, y: 0 },
        { x: 30, y: 0 },
      ];

      const spawnPoint = spawnPoints[state.enemies.nextSpawnPoint];

      if (state.enemies.nextSpawnPoint == 2) state.enemies.nextSpawnPoint = 0;
      else state.enemies.nextSpawnPoint++;

      const isPositionFree = !state.enemies.levelEnemies.some((enemy) => {
        return enemy.tank?.x === spawnPoint.x && enemy.tank.y === spawnPoint.y;
      });

      if (isPositionFree) {
        const id = createEnemyId();
        const newEnemy = createEnemy(
          id,
          state.gameState.selectedLevel,
          state.enemies.index,
          spawnPoint
        );

        state.enemies.levelEnemies.push(newEnemy);
      }
    },

    updateSpawnTimer(state, action: PayloadAction<number>) {
      state.enemies.lastEnemySpawnTime = action.payload;
    },
  },
});

export const {
  nextLevel,
  prevLevel,
  debugModTurnOn,
  debugModTurnOff,
  updateMap,
  addMap,
  appearPlayer,
  kickPlayer,
  addLife,
  takeLife,
  playerMove,
  playerTurn,
  createPlayerBullet,
  bulletCollision,
  updateBulletPosition,
  spawnEnemy,
  updateSpawnTimer,
} = gameSlice.actions;
export default gameSlice.reducer;
