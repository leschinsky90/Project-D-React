import { useAppSelector } from "../../../store/hooks";
import "./infoPanel.css";

export const EnemiesCountComponent = () => {
  const enemyIndex = useAppSelector((state) => state.gameReducer.enemies.index);
  return (
    <div className="enemiesCountComponent">
      {Array.from({ length: 20 - enemyIndex }, (_, i) => (
        <div className="enemyIcon" key={i} />
      ))}
    </div>
  );
};
