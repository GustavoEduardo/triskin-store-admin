import { useState } from "react";
import ProductList from "../components/ProductList";
import SearchInput from "../components/SearchInput";
import { useDebounce } from "../hooks/useDebounce";
import { useCartStore } from "../store/cartStore";
import CartIcon from "../components/CartIcon";

const Home = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const addItem = useCartStore((state) => state.addItem);

  console.log(useCartStore.getState().items);

  return (
    <div className="p-6 w-[100vw] space-y-6">
      <div className="space-y-6 ">
        <div className="flex justify-end">
          <CartIcon />
        </div>
        <SearchInput value={search} onChange={setSearch} />
      </div>
      <div className="h-[70vh] overflow-y-auto">
        <ProductList search={debouncedSearch} onAddToCart={addItem} />
      </div>
    </div>
  );
};

export default Home;
