import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  bulletCollision,
  updateBulletPosition,
} from "../store/slices/game.slice";
import checkBulletCollision from "../services/checkBulletCollision";
import { ConvertMapType } from "../types";

export const useBullets = () => {
  const dispatch = useAppDispatch();
  const bullets = useAppSelector((state) => state.gameReducer.bullets);
  const enemies = useAppSelector(
    (state) => state.gameReducer.enemies.levelEnemies
  );
  const currentMap: ConvertMapType = useAppSelector(
    (state) =>
      state.gameReducer.maps[state.gameReducer.gameState.selectedLevel - 1]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      bullets.forEach((bullet) => {
        const { id, direction, speed, x, y } = bullet;

        const newX =
          direction === "left"
            ? x - speed
            : direction === "right"
            ? x + speed
            : x;
        const newY =
          direction === "up" ? y - speed : direction === "down" ? y + speed : y;

        if (checkBulletCollision(currentMap, enemies, bullet, dispatch)) {
          dispatch(bulletCollision(id));
        } else {
          dispatch(updateBulletPosition({ id, x: newX, y: newY }));
        }
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [bullets, currentMap]);
};
