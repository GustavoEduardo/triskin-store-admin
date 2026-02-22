import type { Product } from "../types/Product";
import { useState } from "react";
import Button from "./Button";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import { useCartStore } from "../store/cartStore";

type Props = {
  product: Product;
  onEdit: (product: Product) => void;
};

const ProductItem = ({ product, onEdit }: Props) => {
  const [isAdding, setIsAdding] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="border border-gray-100/10 rounded-md p-4 flex flex-col gap-8 justify-between items-center max-w-[320px]">
      <div className="flex flex-col gap-2 justify-between items-center">
        <h3 className="font-semibold">{product.name}</h3>

        <div className="flex gap-2 justify-between items-center">
          <p className="text-sm text-gray-300">R$ {product.price.toFixed(2)}</p>
          <span
            className={`text-xs px-1  rounded ${
              product.active
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.active ? "Ativo" : "Inativo"}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          disabled={!product.active || isAdding}
          onClick={() => {
            setIsAdding(true);
            addItem(product);
            setTimeout(() => {
              setIsAdding(false)
              toast.success("Produto adicionado com sucesso!")
            }, 300);
          }}
          variant={product.active ? "success" : "secondary"}
          className={`${!product.active ? "cursor-not-allowed" : ""}`}
        >
          {isAdding ? <Loader /> : "Adicionar"}
        </Button>

        <Button onClick={() => onEdit(product)} variant="primary">
          Editar
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
