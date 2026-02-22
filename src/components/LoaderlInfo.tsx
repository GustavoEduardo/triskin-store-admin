const LoaderInfo = () => {
  return (
    <div className="absolute top-4 left-8 flex items-center gap-2 text-gray-600">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600" />
      <small>Carregando Informações...</small>
    </div>
  );
};

export default LoaderInfo;
