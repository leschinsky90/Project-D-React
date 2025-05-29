import { mapObject } from "../../types";
import "./mapObjects.css";
import getMapObjectConvert from "../../assets/mapObjectConverter";

interface IMapObjectComponentProps {
  type: mapObject;
}

export const MapObjectComponent = ({ type }: IMapObjectComponentProps) => {
  return <>{getMapObjectConvert(type)}</>;
};
