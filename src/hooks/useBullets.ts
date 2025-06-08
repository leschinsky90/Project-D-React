import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  bulletCollision,
  updateBulletPosition,
} from "../store/slices/game.slice";

export const useBullets = () => {
  const dispatch = useAppDispatch();
  const bullets = useAppSelector((state) => state.gameReducer.bullets);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    let animationFrameId: number;

    const moveBullets = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current > 60) {
        bullets.forEach((bullet) => {
          const { id, direction, speed, x, y } = bullet;

          const directions = {
            up: { x: x, y: y - speed },
            down: { x: x, y: y + speed },
            left: { x: x - speed, y: y },
            right: { x: x + speed, y: y },
          };

          const newX = directions[direction].x;
          const newY = directions[direction].y;

          if (newX < 0 || newX > 32 || newY < 0 || newY > 32) {
            dispatch(bulletCollision(id));
          } else {
            dispatch(updateBulletPosition({ id, x: newX, y: newY }));
          }
        });
        lastUpdateRef.current = timestamp;
      }

      animationFrameId = requestAnimationFrame(moveBullets);
    };

    animationFrameId = requestAnimationFrame(moveBullets);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [bullets, dispatch]);
};
