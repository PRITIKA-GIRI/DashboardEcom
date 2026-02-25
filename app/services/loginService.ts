import { apiClient } from "../lib/api";
import { API_ROUTES } from "../lib/api-routes";
import { LoginFormValues, RegisterFormValues, User } from "../types/login.types";

export const authService = {
  async login(data: LoginFormValues): Promise<User> {
    const response = await apiClient.post(API_ROUTES.AUTH.LOGIN, data);
    return response.data;
  },

  async register(data: RegisterFormValues): Promise<User> {
    const response = await apiClient.post(API_ROUTES.AUTH.REGISTER, data);
    return response.data;
  },
};
