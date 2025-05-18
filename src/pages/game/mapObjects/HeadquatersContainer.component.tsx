import { BrickComponent } from "./Brick.component";
import { HeadquatersComponent } from "./Headquaters.component";

export const HeadquatersContainerComponent = () => {
  return (
    <div className="headquatersContainer">
      <BrickComponent />
      <BrickComponent />
      <BrickComponent />
      <BrickComponent />
      <BrickComponent />
      <div className="void" />
      <div className="void" />
      <BrickComponent />
      <BrickComponent />
      <div className="void" />
      <div className="void" />
      <BrickComponent />

      <HeadquatersComponent />
    </div>
  );
};
