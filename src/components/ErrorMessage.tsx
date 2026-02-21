type Props = {
  message?: string;
};

const ErrorMessage = ({ message = "Erro ao carregar dados" }: Props) => {
  return <div className="text-red-600 text-center py-4">{message}</div>;
};

export default ErrorMessage;
