import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/products"
import ProductItem from "./ProductItem"
import Loader from "./Loader"
import ErrorMessage from "./ErrorMessage"
import type { Product } from "../types/Product"
import { useState } from "react"
import EditProductModal from "./EditProductModal"

type Props = {
  search: string
  onAddToCart: (product: Product) => void
}

const ProductList = ({ search, onAddToCart }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })

  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const handleEdit = (product: Product) => setEditingProduct(product)

  if (isLoading) return <Loader />
  if (isError) return <ErrorMessage />

  const filtered = data?.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filtered?.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onEdit={handleEdit}
        />
      ))}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  )
}

export default ProductList