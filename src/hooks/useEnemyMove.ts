import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateEnemyPosition } from "../store/slices/game.slice";
import { enemyCanMove } from "../services/enemyCanMove";

const MOVE_INTERVAL = 300;

export const useEnemyMove = () => {
  const dispatch = useAppDispatch();
  const enemies = useAppSelector(
    (state) => state.gameReducer.enemies.levelEnemies
  );

  useEffect(() => {
    const interval = setInterval(() => {
      enemies.forEach((enemy) => {
        if (!enemy.tank || !enemy.tank.alive) return;

        const { x, y, direction } = enemy.tank;
        const dir = {
          up: { x: 0, y: -1 },
          down: { x: 0, y: 1 },
          left: { x: -1, y: 0 },
          right: { x: 1, y: 0 },
        }[direction];

        const potentPosition = {
          x: x + dir.x / 2,
          y: y + dir.y / 2,
        };

        if (enemyCanMove(potentPosition)) {
          console.log(1);

          dispatch(
            updateEnemyPosition({
              id: enemy.id,
              x: potentPosition.x,
              y: potentPosition.y,
            })
          );
        }
      });
    }, MOVE_INTERVAL);

    return () => clearInterval(interval);
  }, [enemies, dispatch]);
};
