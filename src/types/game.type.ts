import { IBullet } from "./bullet.type";
import { EnemiesArray } from "./enemies.type";
import { ConvertMapType } from "./map.type";
import { IPlayer } from "./player.type";

export interface IGame {
  gameState: {
    selectedLevel: number;
    debugMode: boolean;
  };
  player: IPlayer;
  enemies: EnemiesArray[];
  maps: ConvertMapType[];
  bullets: IBullet[];
}
