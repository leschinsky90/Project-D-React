import { IBullet } from "../../../types";
import "./tanks.css";
export const BulletComponent = ({ bullet }: { bullet: IBullet }) => {
  return (
    <div
      className="bullet"
      style={{
        top: `${bullet.y * 8}px`,
        left: `${bullet.x * 8}px`,
      }}
    ></div>
  );
};
