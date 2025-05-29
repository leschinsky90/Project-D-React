import { useEffect, useState } from "react";
import { GameFieldComponent } from "./GameField.component";
import { InfoPanelComponent } from "./infoPanel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { nextLevel, prevLevel } from "../../store/slices/gameParams.slice";
import "./game.page.css";
import {
  createBullet,
  playerMove,
  playerTurn,
} from "../../store/slices/playerParams.slice";
import { IMovementDirections } from "../../types/movementDirections.type";

export const GamePage = () => {
  const dispatch = useAppDispatch();
  const selectedLevel = useAppSelector(
    (state) => state.gameParamsReducer.selectedLevel
  );

  const mapArr = useAppSelector((state) => state.mapsReducer);
  const [levelSelected, setLevelSelected] = useState<boolean>(false);
  const playerTankPosition = useAppSelector(
    (state) => state.playerParamsReducer.tank.position
  );
  const handleOnKeyDown = (event: KeyboardEvent) => {
    const k = event.code.toLowerCase();
    if (levelSelected) {
      const movementDirections: IMovementDirections = {
        keyw: "up",
        arrowup: "up",
        keys: "down",
        arrowdown: "down",
        keya: "left",
        arrowleft: "left",
        keyd: "right",
        arrowright: "right",
      };
      const dir = movementDirections[k];
      if (dir) {
        if (playerTankPosition == dir)
          dispatch(
            playerMove({
              move: dir,
              map: mapArr[selectedLevel - 1],
            })
          );
        else dispatch(playerTurn(dir));
      }

      if (k == "space") {
        dispatch(createBullet());
      }
    } else {
      if (k == "enter") setLevelSelected(true);
      if (k == "w" || k == "d" || k == "arrowup" || k == "arrowright")
        dispatch(nextLevel());
      if (k == "s" || k == "a" || k == "arrowdown" || k == "arrowleft")
        dispatch(prevLevel());
    }
  };
  const handleOnMouseClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!levelSelected) {
      dispatch(nextLevel());
    }
  };
  const handleOnContextMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!levelSelected) {
      dispatch(prevLevel());
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleOnKeyDown);
    return () => {
      window.removeEventListener("keydown", handleOnKeyDown);
    };
  });

  return (
    <div
      className="gamePageDiv"
      onClick={handleOnMouseClick}
      onContextMenu={handleOnContextMenu}
    >
      {levelSelected ? (
        <>
          <GameFieldComponent map={mapArr[selectedLevel - 1]} />
          <InfoPanelComponent />
        </>
      ) : (
        <h1 className="levelSelectedTitle">STAGE: {selectedLevel}</h1>
      )}
    </div>
  );
};
