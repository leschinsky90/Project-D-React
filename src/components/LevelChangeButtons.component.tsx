import { useAppDispatch, useAppSelector } from "../store/hooks";
import { nextLevel, prevLevel } from "../store/slices/gameParams.slice";

export const LevelChangeButtonsComponent = () => {
  const debugMode = useAppSelector(
    (state) => state.gameParamsReducer.debugMode
  );
  const dispatch = useAppDispatch();
  const handleOnPreviosLevelButtonClick = () => {
    dispatch(prevLevel());
  };
  const handleOnNextLevelButtonClick = () => {
    dispatch(nextLevel());
  };
  return (
    <>
      {debugMode ? (
        <>
          <button
            className="levelChangeButton"
            onClick={handleOnPreviosLevelButtonClick}
          >
            Prev level
          </button>
          <button
            className="levelChangeButton"
            onClick={handleOnNextLevelButtonClick}
          >
            Next level
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
