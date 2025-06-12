import { ConvertMapType, IEnemy, IPlayer } from "../types";

type Move = "up" | "down" | "left" | "right";

const playerCanMove = (
  map: ConvertMapType,
  enemies: IEnemy[],
  playerParams: IPlayer,
  vector: Move
) => {
  const dir = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  }[vector];

  const potentPosition = {
    x: playerParams.tank.x + dir.x / 2,
    y: playerParams.tank.y + dir.y / 2,
  };

  if (
    potentPosition.x > 30 ||
    potentPosition.x < 0 ||
    potentPosition.y < 0 ||
    potentPosition.y > 30
  )
    return false;

  const checkPoints = [
    [0, 0],
    [0.75, 0],
    [1.5, 0],
    [0, 0.75],
    [1.5, 0.75],
    [0, 1.5],
    [0.75, 1.5],
    [1.5, 1.5],
  ];

  for (const [dx, dy] of checkPoints) {
    const mapObject =
      map[Math.trunc(potentPosition.y + dy)][Math.trunc(potentPosition.x + dx)];
    if ([1, 2, 3].includes(mapObject)) {
      return false;
    }
  }

  for (const enemy of enemies) {
    if (!enemy.tank) return true;
    const distanceX = Math.abs(enemy.tank.x - potentPosition.x);
    const distanceY = Math.abs(enemy.tank.y - potentPosition.y);
    if (distanceX < 2 && distanceY < 2) {
      return false;
    }
  }
  return true;
};

export default playerCanMove;
