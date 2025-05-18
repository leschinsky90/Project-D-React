import { /* useAppDispatch, */ useAppSelector } from "../../../../store/hooks";
import "./tanks.css";

export const PlayerTankComponent = () => {
  /* const dispatch = useAppDispatch(); */
  const playerParams = useAppSelector(
    (state) => state.playerParamsReducer.tank
  );
  console.log(playerParams.alive);

  return (
    <>
      <div
        className="playerTank"
        style={{
          top: `${-512 + playerParams.y * 8}px`,
          left: `${-64 + playerParams.x * 8}px`,
        }}
      />
    </>
  );
};
