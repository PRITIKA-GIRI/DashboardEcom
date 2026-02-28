import { apiClient } from "../lib/api";
import { API_ROUTES } from "../lib/api-routes";
import { User } from "../types/user.types";


export const userService = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await apiClient.get(API_ROUTES.USERS);
    return response.data;
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await apiClient.get(`${API_ROUTES.USERS}/${id}`);
    return response.data;
  },

  updateUser: async (id: number, data: Partial<User>): Promise<User> => {
    const response = await apiClient.put(`${API_ROUTES.USERS}/${id}`, data);
    return response.data;
  },

  deleteUser: async (id: number): Promise<void> => {
    await apiClient.delete(`${API_ROUTES.USERS}/${id}`);
  },
};
