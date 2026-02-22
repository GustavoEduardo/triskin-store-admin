import { Trash2 } from "lucide-react";
import Button from "../components/Button";
import { useCartStore } from "../store/cartStore";
import { useMemo } from "react";
import BackButton from "../components/BackButton";
import toast from "react-hot-toast";
import { formatCurrency } from "../utils/formatCurrency";

const CartPage = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const total = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  if (items.length === 0) {
    return (
      <div className="p-6 w-[100vw]  border-1 border-white flex flex-col items-center">
        <div className="p-6">Carrinho vazio</div>
        <div className="">
          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[100vw] space-y-6">
      <div className="relative flex items-center justify-center">
        <div className="absolute left-8">
          <BackButton />
        </div>
        <h2 className="text-2xl font-bold">Meu Carrinho</h2>
      </div>

      <div className="p-6 w-[100vw] h-[70vh] overflow-y-auto space-y-6 border-1 border-white">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <h3>{item.name}</h3>
              <p>{formatCurrency(item.price)}</p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="w-16 border px-2 py-1 rounded-md"
              />

              <Button
                onClick={() => {
                  removeItem(item.id);
                  toast.success("Produto removido do carrinho");
                }}
                variant="danger"
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right font-bold text-lg pr-4">
        Total: {formatCurrency(total)}
      </div>
    </div>
  );
};

export default CartPage;
