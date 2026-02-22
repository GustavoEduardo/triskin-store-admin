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
      <div className="space-y-6">
        <div className="relative flex items-center justify-center">
          <h2 className="text-2xl font-bold">Triskin Store Admin</h2>

          <div className="absolute right-0">
            <CartIcon />
          </div>
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
