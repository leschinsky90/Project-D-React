import enemiesArray from "../../../assets/levelAssets/enemiesArray";

export const EnemiesCountComponent = () => {
  return (
    <div className="enemiesCountComponent">
      {enemiesArray[0].map((_, index) => {
        return <div className="enemyIcon" key={index} />;
      })}
    </div>
  );
};
