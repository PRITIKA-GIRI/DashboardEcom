import { apiClient } from "../lib/api";
import { API_ROUTES } from "../lib/api-routes";
import { Product } from "../types/product.types";

export const productService = {
    getAllProducts: async (): Promise<Product[]> => {
        const response = await apiClient.get(API_ROUTES.PRODUCTS);
        return response.data;
    },

    getProductsByCategory: async (category: string): Promise<Product[]> => {
        const response = await apiClient.get(`${API_ROUTES.PRODUCTS}/${category}`);
        return response.data;
    },

    getProductById: async (id: number): Promise<Product> => {
        const response = await apiClient.get(`${API_ROUTES.PRODUCTS}/${id}`);
        return response.data;
    },
};