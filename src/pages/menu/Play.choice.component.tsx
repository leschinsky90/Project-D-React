import { useNavigate } from "react-router";

export const PlayChoiceComponent = () => {
  const navigate = useNavigate();
  const handleOnPlayChoiceClick = () => {
    navigate("/game");
  };
  return (
    <h3 className="choice" onClick={handleOnPlayChoiceClick}>
      PLAY
    </h3>
  );
};
