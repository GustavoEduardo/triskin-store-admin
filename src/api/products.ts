import axios from "axios"
import type { Product } from "../types/Product"

const api = axios.create({
  baseURL: "http://localhost:3001",
})

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get("/products")
  return data
}

export const updateProduct = async (
  id: string,
  payload: Product
): Promise<Product> => {
  const { data } = await api.put(`/products/${id}`, payload)
  return data
}