import {
  BrickComponent,
  BushComponent,
  ConcreteComponent,
  WaterComponent,
  IceComponent,
} from "../components/mapObjects";

const getMapObjectConvert = (type: number) => {
  return {
    1: <BrickComponent />,
    2: <ConcreteComponent />,
    3: <WaterComponent />,
    4: <BushComponent />,
    5: <IceComponent />,
    0: <div className="void"></div>,
  }[type];
};

export default getMapObjectConvert;
