import { useCallback, useEffect, useState } from "react";
import { CursorMenuComponent } from "./Cursor.menu.component";
import "./menu.css";
import { useNavigate } from "react-router";
import { ChoiceComponent } from "./Choice.component";

export const MenuPage = () => {
  const navigate = useNavigate();
  const [cursorState, setCursorState] = useState(1);

  const handleOnKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const k = event.code.toLowerCase();

      if (["arrowdown", "keys"].includes(k) || ["arrowup", "w"].includes(k))
        setCursorState((prev) => (prev === 1 ? 2 : 1));
      else if (["enter", "space"].includes(k))
        navigate(cursorState === 1 ? "/game" : "/constructor");
    },
    [cursorState, navigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleOnKeyDown);
    return () => window.removeEventListener("keydown", handleOnKeyDown);
  }, [handleOnKeyDown]);
  return (
    <div className="menu">
      <div className="title"></div>
      <div className="choiceContainer">
        <CursorMenuComponent cursorState={cursorState} />
        <ChoiceComponent label="PLAY" path="/game" />
        <ChoiceComponent label="CONSTRUCTOR" path="/constructor" />
      </div>
    </div>
  );
};
