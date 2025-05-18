import { useNavigate } from "react-router";

export const ConstructorChoiceComponent = () => {
  const navigate = useNavigate();
  const handleOnConstructorChoiceClick = () => {
    navigate("/constructor");
  };
  return (
    <h3 className="choice" onClick={handleOnConstructorChoiceClick}>
      CONSTRUCTOR
    </h3>
  );
};
