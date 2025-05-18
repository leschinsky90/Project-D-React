import { useAppSelector } from "../../../store/hooks";

export const LifesCountComponent = () => {
  const lifesCount = useAppSelector((state) => state.playerParamsReducer.lifes);
  return (
    <div className="lifesCountComponent">
      <span>IP</span>
      <span>{lifesCount}</span>
    </div>
  );
};
