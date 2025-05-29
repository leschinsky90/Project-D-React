import { IBullet } from "../../../types";
import "./tanks.css";
export const BulletComponent = (bullet: IBullet) => {
  return (
    <div
      className="bullet"
      style={{
        top: `${-512 + bullet.y * 8}px`,
        left: `${-64 + bullet.x * 8}px`,
      }}
    ></div>
  );
};
