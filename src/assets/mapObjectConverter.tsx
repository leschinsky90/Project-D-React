import {
  BrickComponent,
  BushComponent,
  ConcreteComponent,
  WaterComponent,
} from "../pages/game/mapObjects";
import { IceComponent } from "../pages/game/mapObjects/Ice.component";

const mapObjectConvert = {
  1: <BrickComponent />,
  2: <ConcreteComponent />,
  3: <WaterComponent />,
  4: <BushComponent />,
  5: <IceComponent />,
  0: <div className="void"></div>,
};

export default mapObjectConvert;
