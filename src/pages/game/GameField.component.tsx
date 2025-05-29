import { useAppSelector } from "../../store/hooks";
import { ConvertMapType } from "../../types";
import "./game.page.css";
import { MapObjectComponent } from "./mapObjects";
import { HeadquatersContainerComponent } from "./mapObjects/HeadquatersContainer.component";
import { PlayerTankComponent } from "./mapObjects/tanks";

interface IGameFieldComponentProps {
  map: ConvertMapType;
}

export const GameFieldComponent = ({ map }: IGameFieldComponentProps) => {
  const playerParams = useAppSelector(
    (state) => state.playerParamsReducer.tank
  );
  return (
    <div className="gameField">
      {map.map((row) =>
        row.map((item, index) => <MapObjectComponent type={item} key={index} />)
      )}
      <HeadquatersContainerComponent />
      {playerParams.alive ? <PlayerTankComponent /> : <></>}
    </div>
  );
};
