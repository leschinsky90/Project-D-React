import { useAppSelector } from "../../../store/hooks";

export const StageNumberComponent = () => {
  const selectedLevel = useAppSelector(
    (state) => state.gameReducer.gameState.selectedLevel
  );
  return (
    <div className="stageNumberComponent">
      <span>Stage</span>
      <span>{selectedLevel}</span>
    </div>
  );
};
