import { useState } from "react";
import type { Product } from "../types/Product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../api/products";
import Button from "./Button";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

type Props = {
  product: Product;
  onClose: () => void;
};

const EditProductModal = ({ product, onClose }: Props) => {
  const [form, setForm] = useState(product);
  const [showConfirm, setShowConfirm] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: Product) => updateProduct(product.id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });

      if (!variables.active) {
        removeFromCart(variables.id);
      }

      toast.success("Produto atualizado com sucesso!");

      onClose();
    },

    onError: () => {
      toast.error("Erro ao tentar atualizar produto.");
    },
  });

  const hasChanged =
    form.name !== product.name ||
    form.price !== product.price ||
    form.active !== product.active;

  const removeFromCart = useCartStore((state) => state.removeItem);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-gray-500 p-6 rounded w-96 space-y-4">
        <h2 className="text-lg font-semibold">Editar Produto</h2>

        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border w-full px-3 py-2 rounded-md"
        />

        <input
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
          className="border w-full px-3 py-2 rounded-md"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => setForm({ ...form, active: e.target.checked })}
          />
          Produto ativo
        </label>

        <div className="flex justify-end gap-2">
          <Button
            onClick={onClose}
            variant="secondary"
            className="px-4 py-2 border rounded"
          >
            Cancelar
          </Button>

          <Button
            disabled={!hasChanged || mutation.isPending}
            onClick={() => setShowConfirm(true)}
            className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {mutation.isPending ?  <Loader />  : "Salvar"}
          </Button>
        </div>
      </div>
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-500 p-6 rounded w-96 space-y-16 shadow-lg">
            <h3 className="text-lg font-semibold">Confirmar alteração</h3>

            <div className="text-md text-white">
              Deseja prosseguir com a alteração? <br/>
              {form.active ? '' : ' Produtos inativos serão removidos do carrinho!'}              
            </div>
            

            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  onClose();
                  setShowConfirm(false);
                }}
                variant="secondary"
              >
                Cancelar
              </Button>

              <Button
                onClick={() => {
                  mutation.mutate(form);
                  setShowConfirm(false);
                }}
                variant="primary"
              >
                 {mutation.isPending ?  <Loader />  : "Confirmar"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProductModal;
