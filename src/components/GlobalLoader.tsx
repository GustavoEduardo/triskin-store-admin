import { useIsFetching } from "@tanstack/react-query";
import Loader from "./Loader";

const GlobalLoader = () => {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div className="fixed top-50 left-0 w-full h-1 z-50">
      <Loader />
    </div>
  );
};

export default GlobalLoader;
