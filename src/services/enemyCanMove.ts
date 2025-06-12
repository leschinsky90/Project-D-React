import { ConvertMapType, IEnemy, IPlayer } from "../types";

export const enemyCanMove = (
  map: ConvertMapType,
  player: IPlayer,
  enemies: IEnemy[],
  potentPosition: { x: number; y: number },
  selfId: number | undefined
): boolean => {
  if (!selfId) return false;
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
    const x = Math.trunc(potentPosition.x + dx);
    const y = Math.trunc(potentPosition.y + dy);
    const mapObject = map[y][x];
    if ([1, 2, 3].includes(mapObject)) {
      return false;
    }
  }

  for (const enemy of enemies) {
    if (!enemy.tank || enemy.id === selfId) continue;
    const dx = Math.abs(enemy.tank.x - potentPosition.x);
    const dy = Math.abs(enemy.tank.y - potentPosition.y);
    if (dx < 2 && dy < 2) return false;
  }

  const { tank } = player;

  if (tank) {
    const dx = Math.abs(tank.x - potentPosition.x);
    const dy = Math.abs(tank.y - potentPosition.y);
    if (dx < 2 && dy < 2) return false;
  }

  return true;
};
