import { useEffect, useState } from "react";
import { ConstructorChoiceComponent } from "./Constructor.choice.component";
import { CursorMenuComponent } from "./Cursor.menu.component";
import "./menu.css";
import { PlayChoiceComponent } from "./Play.choice.component";
import { useNavigate } from "react-router";

export const MenuPage = () => {
  const navigate = useNavigate();
  const [cursorState, setCursorState] = useState<number>(1);
  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (event.key == "ArrowDown" || event.key == "S") {
      setCursorState((cursorState % 2) + 1);
    }
    if (event.key == "ArrowUp" || event.key == "W") {
      if (cursorState == 1) setCursorState(2);
      else if (cursorState == 2) setCursorState(1);
    } else if (event.key == "Enter" || event.key == "Space") {
      if (cursorState == 1) navigate("/game");
      else if (cursorState == 2) navigate("/constructor");
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleOnKeyDown);
    return () => {
      window.removeEventListener("keydown", handleOnKeyDown);
    };
  });
  return (
    <div className="menu">
      <div className="title"></div>
      <div className="choiceContainer">
        <CursorMenuComponent cursorState={cursorState} />
        <PlayChoiceComponent />
        <ConstructorChoiceComponent />
      </div>
    </div>
  );
};
