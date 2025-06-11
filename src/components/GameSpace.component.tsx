import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { LevelChangeButtonsComponent } from "./LevelChangeButtons.component";
import versionData from "../../public/version.json";

interface IGameSpaceComponent {
  children?: ReactNode;
}

export const GameSpaceComponent = ({ children }: IGameSpaceComponent) => {
  return (
    <>
      <LevelChangeButtonsComponent />
      <div className="gameSpace">
        {children}
        <Outlet />
        <span className="versionSpan">{versionData.version}</span>
      </div>
    </>
  );
};
