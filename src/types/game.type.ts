import { IBullet } from "./bullet.type";
import { IEnemy } from "./enemies.type";
import { ConvertMapType } from "./map.type";
import { IPlayer } from "./player.type";

export interface IGame {
  gameState: {
    selectedLevel: number;
    debugMode: boolean;
  };
  player: IPlayer;
  enemies: {
    levelEnemies: IEnemy[];
    lastEnemySpawnTime: number;
  };

  maps: ConvertMapType[];
  bullets: IBullet[];
}
