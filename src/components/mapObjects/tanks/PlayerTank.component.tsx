import { useAppSelector } from "../../../store/hooks";
import "./tanks.css";

const getTankSprite = (lvl: number, direction: string) => {
  return new URL(
    `/public/sprites/Tanks/Player/lvl${lvl}/${direction}1.png`,
    import.meta.url
  ).href;
};

export const PlayerTankComponent = () => {
  const playerParams = useAppSelector((state) => state.gameReducer.player);
  const playerTankParams = playerParams.tank;

  return (
    <>
      <div
        className="playerTank"
        style={{
          top: `${-512 + playerTankParams.y * 16}px`,
          left: `${-64 + playerTankParams.x * 16}px`,
          backgroundImage: `url(${getTankSprite(
            playerParams.lvl,
            playerTankParams.direction
          )})`,
        }}
      />
    </>
  );
};
