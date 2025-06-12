import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { spawnEnemy, updateSpawnTimer } from "../store/slices/game.slice";
const ENEMY_SPAWN_INTERVAL = 10000;

export const useEnemySpawner = () => {
  const dispatch = useAppDispatch();
  const { lastEnemySpawnTime, levelEnemies, index } = useAppSelector(
    (state) => state.gameReducer.enemies
  );
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const spawnEnemyIfNeeded = () => {
      if (indexRef.current > 19) return;
      const now = Date.now();
      if (
        now - lastEnemySpawnTime > ENEMY_SPAWN_INTERVAL &&
        levelEnemies.length < 3
      ) {
        dispatch(spawnEnemy());
        dispatch(updateSpawnTimer(now));
      }
      setTimeout(spawnEnemyIfNeeded, 4000);
    };
    const timeout = setTimeout(spawnEnemyIfNeeded, 3000);
    return () => clearTimeout(timeout);
  }, [lastEnemySpawnTime, levelEnemies.length, dispatch]);
};
