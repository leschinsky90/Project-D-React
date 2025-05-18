import { useAppSelector } from "../../store/hooks";
import { MapType } from "../../types";
import "./game.page.css";
import { ContainerComponent } from "./mapObjects";
import { HeadquatersContainerComponent } from "./mapObjects/HeadquatersContainer.component";
import { PlayerTankComponent } from "./mapObjects/tanks";

interface IGameFieldComponentProps {
  map: MapType;
}

export const GameFieldComponent = ({ map }: IGameFieldComponentProps) => {
  const playerParams = useAppSelector(
    (state) => state.playerParamsReducer.tank
  );
  return (
    <div className="gameField">
      {map.map((row, rowIndex) =>
        row.map((item, index) => (
          
          <ContainerComponent
            type={item}
            key={index}
            x={index * 16}
            y={rowIndex * 16}
          />
        ))
      )}
      <HeadquatersContainerComponent />
      {playerParams.alive ? <PlayerTankComponent /> : <></>}
    </div>
  );
};
