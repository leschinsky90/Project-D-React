import { /* useAppDispatch, */ useAppSelector } from "../../../../store/hooks";
import "./tanks.css";

export const PlayerTankComponent = () => {
  /* const dispatch = useAppDispatch(); */
  const playerParams = useAppSelector((state) => state.playerParamsReducer);
  const playerTankParams = playerParams.tank;

  return (
    <>
      <div
        className="playerTank"
        style={{
          top: `${-512 + playerTankParams.y * 16}px`,
          left: `${-64 + playerTankParams.x * 16}px`,
          backgroundImage: `url(src/assets/sprites/Tanks/Player/lvl${playerParams.lvl}/${playerTankParams.position}1.png)`,
        }}
      />
    </>
  );
};
