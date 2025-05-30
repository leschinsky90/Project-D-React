import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeBullet, updateBulletPosition } from "../store/slices/game.slice";

export const useBullets = () => {
  const dispatch = useAppDispatch();
  const bullets = useAppSelector((state) => state.gameReducer.bullets);

  useEffect(() => {
    let animationFrameId: number;

    const moveBullets = () => {
      bullets.forEach((bullet) => {
        const { id, direction, speed } = bullet;
        let newX = bullet.x;
        let newY = bullet.y;

        // Обновляем позицию в зависимости от направления
        switch (direction) {
          case "up":
            newY -= speed;
            break;
          case "down":
            newY += speed;
            break;
          case "left":
            newX -= speed;
            break;
          case "right":
            newX += speed;
            break;
        }
        if (newX < 0 || newX > 32 || newY < 0 || newY > 32) {
          dispatch(removeBullet(id));
        } else {
          dispatch(updateBulletPosition({ id, x: newX, y: newY }));
        }
      });

      animationFrameId = requestAnimationFrame(moveBullets);
    };

    animationFrameId = requestAnimationFrame(moveBullets);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [bullets, dispatch]);
};
