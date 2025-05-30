import { useAppSelector } from "../../store/hooks";
import { ConvertMapType } from "../../types";
import "./game.page.css";
import {
  BulletComponent,
  MapObjectComponent,
} from "../../components/mapObjects";
import { HeadquatersContainerComponent } from "../../components/mapObjects";
import { PlayerTankComponent } from "../../components/mapObjects";

interface IGameFieldComponentProps {
  map: ConvertMapType;
}

export const GameFieldComponent = ({ map }: IGameFieldComponentProps) => {
  const playerParams = useAppSelector((state) => state.gameReducer.player);
  const { bullets } = useAppSelector((state) => state.gameReducer);
  return (
    <div className="gameField">
      {map.map((row) =>
        row.map((item, index) => <MapObjectComponent type={item} key={index} />)
      )}
      <HeadquatersContainerComponent />
      {playerParams.tank.alive ? <PlayerTankComponent /> : <></>}
      {bullets.map((item) => (
        <BulletComponent bullet={item} key={item.id} />
      ))}
    </div>
  );
};
