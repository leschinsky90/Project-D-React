import { useNavigate } from "react-router";

interface IChoiceComponentProps {
  label: string;
  path: string;
}

export const ChoiceComponent = ({ label, path }: IChoiceComponentProps) => {
  const navigate = useNavigate();
  return (
    <h3 className="choice" onClick={() => navigate(path)}>
      {label}
    </h3>
  );
};
