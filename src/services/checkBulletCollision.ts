import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { updateMap } from "../store/slices/game.slice";
import { ConvertMapType, IBullet } from "../types";
import { IGame } from "../types/game.type";

const checkBulletCollision = (
  map: ConvertMapType,
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

  const mapObjectInPotentPosition = map[potentY][potentX];

  if (
    mapObjectInPotentPosition === 1 ||
    (mapObjectInPotentPosition === 2 && lvl === 3)
  ) {
    setTimeout(() => {
      dispatch(
        updateMap({
          x: potentX,
          y: potentY,
          value: 0,
        })
      );
    }, 0);
    return true;
  }

  return mapObjectInPotentPosition === 2;
};

export default checkBulletCollision;
