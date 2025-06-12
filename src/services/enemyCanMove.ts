/* import { ConvertMapType, IPlayer } from "../types";
 */
export const enemyCanMove = (
  /* map: ConvertMapType,
  player: IPlayer, */
  potentPosition: { x: number; y: number }
) => {
  if (
    potentPosition.x > 30 ||
    potentPosition.x < 0 ||
    potentPosition.y < 0 ||
    potentPosition.y > 30
  )
    return false;

  return true;
};
