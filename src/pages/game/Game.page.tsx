import { useEffect, useState } from "react";
import { GameFieldComponent } from "./GameField.component";
import { InfoPanelComponent } from "./infoPanel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./game.page.css";
import { IMovementDirections } from "../../types";
import {
  createPlayerBullet,
  nextLevel,
  playerMove,
  playerTurn,
  prevLevel,
} from "../../store/slices/game.slice";
import { useBullets } from "../../hooks/useBullets";

export const GamePage = () => {
  const dispatch = useAppDispatch();
  const [levelSelected, setLevelSelected] = useState<boolean>(false);

  const { selectedLevel } = useAppSelector(
    (state) => state.gameReducer.gameState
  );
  const mapArr = useAppSelector((state) => state.gameReducer.maps);
  const playerTankDirection = useAppSelector(
    (state) => state.gameReducer.player.tank.direction
  );

  useBullets();

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
        if (playerTankDirection == dir) {
          dispatch(playerMove());
        } else dispatch(playerTurn(dir));
      }
      if (k == "space") {
        dispatch(createPlayerBullet());
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
