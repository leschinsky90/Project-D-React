import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { spawnEnemy, updateSpawnTimer } from "../store/slices/game.slice";

export const useEnemySpawner = () => {
  const dispatch = useAppDispatch();
  const { lastEnemySpawnTime, levelEnemies, index } = useAppSelector(
    (state) => state.gameReducer.enemies
  );

  useEffect(() => {
    const spawnEnemyIfNeeded = () => {
      if (index > 19) return;
      const now = Date.now();

      if (now - lastEnemySpawnTime > 7000 && levelEnemies.length < 3) {
        dispatch(spawnEnemy());
        dispatch(updateSpawnTimer(now));
      }

      setTimeout(spawnEnemyIfNeeded, 3000);
    };

    const timeout = setTimeout(spawnEnemyIfNeeded, 3000);

    return () => clearTimeout(timeout);
  }, [lastEnemySpawnTime, levelEnemies.length, dispatch]);
};
