import { useState } from "react";
import ProductList from "../components/ProductList";
import SearchInput from "../components/SearchInput";
import { useDebounce } from "../hooks/useDebounce";
import CartIcon from "../components/CartIcon";

const Home = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div className="p-6 w-[100vw] space-y-6">
      <div className="space-y-6 ">
        <div className="flex justify-end">
          <CartIcon />
        </div>
        <SearchInput value={search} onChange={setSearch} />
      </div>
      <div className="h-[70vh] overflow-y-auto">
        <ProductList search={debouncedSearch} />
      </div>
    </div>
  );
};

export default Home;
