import { /* ConvertMapType, */ IBullet } from "../types";

const checkBulletCollision = (
  /*   map: ConvertMapType,
   */ bullet: IBullet
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
    return false;
  }

  /* const mapObjectInPotentPosition = {
    1: map[Math.trunc(potentPosition.y)][Math.trunc(potentPosition.x)],
    2: map[Math.trunc(potentPosition.y)][Math.trunc(potentPosition.x + 1.5)],
    3: map[Math.trunc(potentPosition.y + 1.5)][
      Math.trunc(potentPosition.x + 1.5)
    ],
    4: map[Math.trunc(potentPosition.y + 1.5)][Math.trunc(potentPosition.x)],
  };

  return (
    ![1, 2, 3].includes(mapObjectInPotentPosition[1]) &&
    ![1, 2, 3].includes(mapObjectInPotentPosition[2]) &&
    ![1, 2, 3].includes(mapObjectInPotentPosition[3]) &&
    ![1, 2, 3].includes(mapObjectInPotentPosition[4])
  ); */
  return true;
};

export default checkBulletCollision;
