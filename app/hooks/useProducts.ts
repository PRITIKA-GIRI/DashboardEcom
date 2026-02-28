"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Product } from "../types/product.types";
import { productService } from "../services/productService";
import { toast } from "sonner";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: productService.getAllProducts,
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: () => productService.getProductsByCategory(category),
    enabled: !!category,
  });
};

export const useProduct = (id: number) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: Omit<Product, "id">) =>
      productService.createProduct(newProduct),

    onSuccess: () => {
      toast.success("Product created successfully!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};