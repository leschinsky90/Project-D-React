import { useCallback, useEffect, useState } from "react";
import { GameFieldComponent } from "./GameField.component";
import { InfoPanelComponent } from "./infoPanel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./game.page.css";
import { Directions } from "../../types";
import {
  createPlayerBullet,
  nextLevel,
  playerMove,
  playerTurn,
  prevLevel,
} from "../../store/slices/game.slice";
import { useBullets } from "../../hooks/useBullets";
import { useEnemySpawner } from "../../hooks/useEnemiesSpawner";
import { useEnemyMove } from "../../hooks/useEnemyMove";

export const GamePage = () => {
  const dispatch = useAppDispatch();
  const [levelSelected, setLevelSelected] = useState<boolean>(false);
  const [isGameFieldVisible, setIsGameFieldVisible] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const { selectedLevel } = useAppSelector(
    (state) => state.gameReducer.gameState
  );
  const mapArr = useAppSelector((state) => state.gameReducer.maps);
  const playerTankDirection = useAppSelector(
    (state) => state.gameReducer.player.tank.direction
  );

  useBullets();
  useEnemySpawner();
  useEnemyMove();

  const handleOnKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const k = event.code.toLowerCase();
      if (!levelSelected) {
        if (["enter", "space"].includes(k)) setLevelSelected(true);
        if (["keyw", "keyd", "arrowup", "arrowright"].includes(k))
          dispatch(nextLevel());
        if (["keys", "keya", "arrowdown", "arrowleft"].includes(k))
          dispatch(prevLevel());
        return;
      }
      const dirs: Record<string, Directions> = {
        keyw: "up",
        arrowup: "up",
        keys: "down",
        arrowdown: "down",
        keya: "left",
        arrowleft: "left",
        keyd: "right",
        arrowright: "right",
      };
      const dir: Directions = dirs[k];

      if (dir) {
        dispatch(playerTurn(dir));
        dispatch(playerMove());
      }
      if (k === "space") {
        dispatch(createPlayerBullet());
      }
    },
    [levelSelected, playerTankDirection, dispatch]
  );

  const handleMouseInteraction = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      action: () => void
    ) => {
      event.preventDefault();
      action();
    },
    [levelSelected]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleOnKeyDown);
    return () => window.removeEventListener("keydown", handleOnKeyDown);
  }, [handleOnKeyDown]);

  useEffect(() => {
    if (levelSelected) {
      setIsGameFieldVisible(true);
      setTimeout(() => {
        setIsPanelVisible(true);
      }, 1000);
    }
  }, [levelSelected]);

  return (
    <div
      className="gamePageDiv"
      onClick={(event) =>
        handleMouseInteraction(event, () => {
          if (!levelSelected) dispatch(nextLevel());
        })
      }
      onContextMenu={(event) =>
        handleMouseInteraction(event, () => {
          if (!levelSelected) dispatch(prevLevel());
        })
      }
    >
      {levelSelected ? (
        <div className="gameWrapper">
          <div
            className={`gameFieldAnimated ${
              isGameFieldVisible ? "visible" : ""
            }`}
          >
            <GameFieldComponent map={mapArr[selectedLevel - 1]} />
          </div>
          <div
            className={`infoPanelAnimated ${isPanelVisible ? "visible" : ""}`}
          >
            <InfoPanelComponent />
          </div>
        </div>
      ) : (
        <div className="levelSelectedDiv">
          <h1 className="levelSelectedTitle">STAGE: {selectedLevel}</h1>
          <button
            className="playLevelButton"
            onClick={(event) => {
              event.stopPropagation();
              setLevelSelected(true);
            }}
          >
            Play level
          </button>
        </div>
      )}
    </div>
  );
};
