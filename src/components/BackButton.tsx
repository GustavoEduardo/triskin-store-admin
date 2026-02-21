import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <a
      className="cursor-pointer flex gap-1 text-sm"
      onClick={() => navigate(-1)}
    >
      Voltar
    </a>
  );
};

export default BackButton;
