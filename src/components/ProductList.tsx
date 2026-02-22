import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import ProductItem from "./ProductItem";
import ErrorMessage from "./ErrorMessage";
import type { Product } from "../types/Product";
import { useMemo, useState } from "react";
import EditProductModal from "./EditProductModal";

type Props = {
  search: string;
};

const ProductList = ({ search }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    return data.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEdit = (product: Product) => setEditingProduct(product);

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-40 bg-gray-500 animate-pulse rounded-md" />
        ))}
      </div>
    );
  }
  if (isError) return <ErrorMessage />;

  if (filteredProducts.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Nenhum produto encontrado</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts?.map((product) => (
        <ProductItem key={product.id} product={product} onEdit={handleEdit} />
      ))}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
