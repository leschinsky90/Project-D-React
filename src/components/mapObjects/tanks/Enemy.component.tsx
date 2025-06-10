import { IEnemy } from "../../../types";
import "./tanks.css";

interface EnemyComponentProps {
  enemy: IEnemy;
}

export const EnemyComponent = ({ enemy }: EnemyComponentProps) => {
  return (
    <div
      className="enemy"
      style={{
        position: "absolute",
        left: `${enemy.tank?.x * 16}px`,
        top: `${enemy.tank?.y * 16}px`,
        backgroundImage: `url(sprites/Tanks/Enemies/${enemy.type}Tank/${enemy.tank?.direction}1.png)`,
      }}
    />
  );
};
