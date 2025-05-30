import { /* useAppDispatch, */ useAppSelector } from "../../../store/hooks";
import "./tanks.css";

export const PlayerTankComponent = () => {
  /* const dispatch = useAppDispatch(); */
  const playerParams = useAppSelector((state) => state.gameReducer.player);
  const playerTankParams = playerParams.tank;

  return (
    <>
      <div
        className="playerTank"
        style={{
          top: `${-512 + playerTankParams.y * 16}px`,
          left: `${-64 + playerTankParams.x * 16}px`,
          backgroundImage: `url(/sprites/Tanks/Player/lvl${playerParams.lvl}/${playerTankParams.direction}1.png)`,
        }}
      />
    </>
  );
};
