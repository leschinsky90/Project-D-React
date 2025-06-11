import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { LevelChangeButtonsComponent } from "./LevelChangeButtons.component";

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
        <span className="versionSpan">v. 0.18 beta</span>
      </div>
    </>
  );
};
