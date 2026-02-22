import { useIsFetching } from "@tanstack/react-query";
import LoaderInfo from "./LoaderlInfo";

const GlobalLoader = () => {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div className="fixed top-50 left-0 w-full h-1 z-50">
      <LoaderInfo />
    </div>
  );
};

export default GlobalLoader;
