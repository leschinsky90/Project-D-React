import { IEnemy } from "../../../types";
import "./tanks.css";

interface EnemyComponentProps {
  enemy: IEnemy;
}

export const EnemyComponent = ({ enemy }: EnemyComponentProps) => {
  if (
    !enemy?.tank ||
    enemy.tank.x === undefined ||
    enemy.tank.y === undefined
  ) {
    return null;
  }
  return (
    <div
      className="enemy"
      style={{
        left: `${enemy.tank?.x * 16}px`,
        top: `${enemy.tank?.y * 16}px`,
        backgroundImage: `url(sprites/Tanks/Enemies/${enemy.type}Tank/${enemy.tank?.direction}1.png)`,
      }}
    />
  );
};
