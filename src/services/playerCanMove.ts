import { ConvertMapType, IPlayer } from "../types";

type Move = "up" | "down" | "left" | "right";

const playerCanMove = (
  map: ConvertMapType,
  playerParams: IPlayer,
  vector: Move
) => {
  const directions = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  };

  const dir = directions[vector];
  const potentPosition = {
    x: playerParams.tank.x + dir.x / 2,
    y: playerParams.tank.y + dir.y / 2,
  };

  if (
    potentPosition.x > 30 ||
    potentPosition.x < 0 ||
    potentPosition.y < 0 ||
    potentPosition.y > 30
  ) {
    return false;
  }

  const mapObjectInPotentPosition = {
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
  );
};

export default playerCanMove;
