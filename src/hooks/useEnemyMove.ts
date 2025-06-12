import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  updateEnemyDirection,
  updateEnemyPosition,
} from "../store/slices/game.slice";
import { enemyCanMove } from "../services/enemyCanMove";
import { Directions } from "../types";

const MOVE_INTERVAL = 100;
const directions: Directions[] = ["up", "down", "left", "right"];
const getRandomDirection = () => {
  return directions[Math.floor(Math.random() * 4)];
};

export const useEnemyMove = () => {
  const dispatch = useAppDispatch();
  const enemies = useAppSelector(
    (state) => state.gameReducer.enemies.levelEnemies
  );
  const map = useAppSelector((state) => state.gameReducer.maps)[
    useAppSelector((state) => state.gameReducer.gameState.selectedLevel - 1)
  ];
  const player = useAppSelector((state) => state.gameReducer.player);

  useEffect(() => {
    const directionTimer = setInterval(() => {
      enemies.forEach((enemy) => {
        if (enemy.tank?.alive) {
          dispatch(
            updateEnemyDirection({
              id: enemy.id,
              direction: getRandomDirection(),
            })
          );
        }
      });
    }, 5000);

    return () => clearInterval(directionTimer);
  }, [enemies, dispatch]);

  useEffect(() => {
    const moveTimer = setInterval(() => {
      enemies.forEach((enemy) => {
        if (!enemy.tank?.alive) return;

        const { x, y, direction } = enemy.tank;
        const movementVector = {
          up: { x: 0, y: -1 },
          down: { x: 0, y: 1 },
          left: { x: -1, y: 0 },
          right: { x: 1, y: 0 },
        }[direction];

        const nextPosition = {
          x: x + movementVector.x / 2,
          y: y + movementVector.y / 2,
        };

        const canMove = enemyCanMove(
          map,
          player,
          enemies,
          nextPosition,
          enemy.id
        );

        if (canMove) {
          dispatch(
            updateEnemyPosition({
              id: enemy.id,
              x: nextPosition.x,
              y: nextPosition.y,
            })
          );
        } else {
          dispatch(
            updateEnemyDirection({
              id: enemy.id,
              direction: getRandomDirection(),
            })
          );
        }
      });
    }, MOVE_INTERVAL);

    return () => clearInterval(moveTimer);
  }, [enemies, map, player, dispatch]);
};
