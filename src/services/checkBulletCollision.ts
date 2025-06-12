import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { hitEnemy, updateMap } from "../store/slices/game.slice";
import { ConvertMapType, IBullet, IEnemy } from "../types";
import { IGame } from "../types/game.type";

const checkBulletCollision = (
  map: ConvertMapType,
  enemies: IEnemy[],
  bullet: IBullet,
  dispatch: ThunkDispatch<{ gameReducer: IGame }, undefined, UnknownAction> &
    Dispatch<UnknownAction>
): boolean => {
  const { direction, x, y, speed, lvl } = bullet;
  const dir = {
    up: { x: 0, y: -speed },
    down: { x: 0, y: speed },
    left: { x: -speed, y: 0 },
    right: { x: speed, y: 0 },
  }[direction];

  const potentX = Math.trunc(x + dir.x);
  const potentY = Math.trunc(y + dir.y);

  if (potentX < 0 || potentX > 31 || potentY < 0 || potentY > 31) return true;

  const extraX =
    potentX === 0
      ? 0
      : direction === "up" || direction === "down"
      ? x % 1 === 0
        ? potentX - 1
        : potentX
      : potentX;
  const extraY =
    potentY === 0
      ? 0
      : direction === "left" || direction === "right"
      ? y % 1 === 0
        ? potentY - 1
        : potentY
      : potentY;

  const mapObjects = [map[potentY][potentX], map[extraY]?.[extraX] ?? 0];

  const shouldDestroy = (obj: number) => obj === 1 || (obj === 2 && lvl === 3);

  const hittedEnemy = enemies.find((enemy) => {
    if (!enemy.tank) return false;
    const { x: ex, y: ey } = enemy.tank;

    const enemyHitbox = [];

    for (let dx = 0; dx < 2; dx += 0.5) {
      for (let dy = 0; dy < 2; dy += 0.5) {
        enemyHitbox.push({ x: ex + dx, y: ey + dy });
      }
    }

    return enemyHitbox.some(({ x, y }) => x === potentX && y === potentY);
  });

  if (hittedEnemy) {
    setTimeout(() => {
      dispatch(hitEnemy(hittedEnemy.id));
    }, 0);
    return true;
  }

  if (mapObjects.some(shouldDestroy)) {
    setTimeout(() => {
      mapObjects.forEach((obj, index) => {
        if (shouldDestroy(obj)) {
          dispatch(
            updateMap({
              x: index === 0 ? potentX : extraX,
              y: index === 0 ? potentY : extraY,
              value: 0,
            })
          );
        }
      });
    }, 0);
    return true;
  }

  return mapObjects.includes(2);
};

export default checkBulletCollision;
