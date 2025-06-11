import { useAppDispatch, useAppSelector } from "../store/hooks";
import { nextLevel, prevLevel } from "../store/slices/game.slice";

export const LevelChangeButtonsComponent = () => {
  const debugMode = useAppSelector(
    (state) => state.gameReducer.gameState.debugMode
  );
  if (!debugMode) return null;

  const dispatch = useAppDispatch();

  return (
    <div className="levelChangeButtons">
      <button
        className="levelChangeButton"
        onClick={() => dispatch(prevLevel())}
      >
        Prev level
      </button>
      <button
        className="levelChangeButton"
        onClick={() => dispatch(nextLevel())}
      >
        Next level
      </button>
    </div>
  );
};
