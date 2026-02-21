import { useState } from "react"
import type { Product } from "../types/Product"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProduct } from "../api/products"

type Props = {
  product: Product
  onClose: () => void
}

const EditProductModal = ({ product, onClose }: Props) => {
  const [form, setForm] = useState(product)
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (data: Product) =>
      updateProduct(product.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
      onClose()
    },
  })

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96 space-y-4">
        <h2 className="text-lg font-semibold">Editar Produto</h2>

        <input
          type="text"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border w-full px-3 py-2"
        />

        <input
          type="number"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: Number(e.target.value) })
          }
          className="border w-full px-3 py-2"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancelar
          </button>

          <button
            disabled={mutation.isPending}
            onClick={() => mutation.mutate(form)}
            className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {mutation.isPending ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditProductModal