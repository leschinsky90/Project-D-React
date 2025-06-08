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
  const { direction, x, y, speed } = bullet;
  const directions = {
    up: { x: 0, y: -speed },
    down: { x: 0, y: speed },
    left: { x: -speed, y: 0 },
    right: { x: speed, y: 0 },
  };

  const dir = directions[direction];
  const potentPosition = {
    x: x + dir.x,
    y: y + dir.y,
  };

  if (
    potentPosition.x > 32 ||
    potentPosition.x < 0 ||
    potentPosition.y < 0 ||
    potentPosition.y > 32
  ) {
    return true;
  }

  const mapObjectInPotentPosition =
    map[Math.trunc(potentPosition.y)][Math.trunc(potentPosition.x)];

  if (mapObjectInPotentPosition === 1) {
    dispatch(
      updateMap({
        x: Math.trunc(potentPosition.x),
        y: Math.trunc(potentPosition.y),
        value: 0,
      })
    );
    return true;
  }
  if (mapObjectInPotentPosition === 2) {
    return true;
  }
  return false;
};

export default checkBulletCollision;
