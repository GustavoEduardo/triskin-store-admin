import type { Product } from "../types/Product"
import { useState } from "react"

type Props = {
  product: Product
  onAddToCart: (product: Product) => void
  onEdit: (product: Product) => void
}

  const ProductItem = ({ product, onAddToCart, onEdit }: Props) => {

  const [isAdding, setIsAdding] = useState(false)

  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">
          R$ {product.price.toFixed(2)}
        </p>
        <span
          className={`text-xs px-2 py-1 rounded ${
            product.active
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.active ? "Ativo" : "Inativo"}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <button
          disabled={!product.active || isAdding}
          onClick={() => {
            setIsAdding(true)
            onAddToCart(product)
            setTimeout(() => setIsAdding(false), 300)
          }}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isAdding ? "Adicionando..." : "Adicionar"}
        </button>

        <button
          onClick={() => onEdit(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Editar
        </button>
      </div>
    </div>
  )
}

export default ProductItem