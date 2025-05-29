import { mapObject } from "../../../types";
import "./mapObjects.css";
import mapObjectConvert from "../../../assets/mapObjectConverter";

interface IMapObjectComponentProps {
  type: mapObject;
}

export const MapObjectComponent = ({ type }: IMapObjectComponentProps) => {
  return <>{mapObjectConvert[type]}</>;
};
