import { JSX } from "react";
import { mapObject } from "../../../types";
import { BrickComponent } from "./Brick.component";
import { ConcreteComponent } from "./Concrete.component";
import { WaterComponent } from "./Water.component";
import { BushComponent } from "./Bush.component";
import { IceComponent } from "./Ice.component";
import "./mapObjects.css";

interface IContainerComponentProps {
  type: mapObject;
  x: number;
  y: number;
}

export const ContainerComponent = ({ type }: IContainerComponentProps) => {
  const createMapObject = (): JSX.Element => {
    switch (type) {
      case 1:
        return (
          <>
            <BrickComponent />
            <BrickComponent />
            <BrickComponent />
            <BrickComponent />
          </>
        );
      case 2:
        return (
          <>
            <ConcreteComponent />
            <ConcreteComponent />
            <ConcreteComponent />
            <ConcreteComponent />
          </>
        );
      case 3:
        return (
          <>
            <WaterComponent />
            <WaterComponent />
            <WaterComponent />
            <WaterComponent />
          </>
        );
      case 4:
        return (
          <>
            <BushComponent />
            <BushComponent />
            <BushComponent />
            <BushComponent />
          </>
        );
      case 5:
        return (
          <>
            <IceComponent />
            <IceComponent />
            <IceComponent />
            <IceComponent />
          </>
        );
      default:
      case 0:
        return <></>;
    }
  };
  return <div className="container">{createMapObject()}</div>;
};
