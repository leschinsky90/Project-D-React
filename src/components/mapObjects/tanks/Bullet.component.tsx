import { IBullet } from "../../../types";
import "./tanks.css";
export const BulletComponent = ({ bullet }: { bullet: IBullet }) => {
  return (
    <div
      className="bullet"
      style={{
        top: `${-2 + bullet.y * 16}px`,
        left: `${-2 + bullet.x * 16}px`,
      }}
    ></div>
  );
};
