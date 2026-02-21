import { useCartStore } from "../store/cartStore"
import { useMemo } from "react"

const CartPage = () => {
  const { items, removeItem, updateQuantity } = useCartStore()

  const total = useMemo(() => {
    return items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
  }, [items])

  if (items.length === 0) {
    return <div className="p-6">Carrinho vazio</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded p-4 flex justify-between items-center"
        >
          <div>
            <h3>{item.name}</h3>
            <p>R$ {item.price.toFixed(2)}</p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <input
              type="number"
              min={1}
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, Number(e.target.value))
              }
              className="w-16 border px-2 py-1"
            />

            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remover
            </button>
          </div>
        </div>
      ))}

      <div className="text-right font-bold text-lg">
        Total: R$ {total.toFixed(2)}
      </div>
    </div>
  )
}

export default CartPage