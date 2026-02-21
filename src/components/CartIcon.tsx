import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useMemo } from "react";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const items = useCartStore((state) => state.items);

  const totalItems = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
