import { apiClient } from "../lib/api";
import { API_ROUTES } from "../lib/api-routes";
import { LoginFormValues, RegisterFormValues, UserLogin } from "../types/login.types";

export const authService = {
  async login(data: LoginFormValues): Promise<UserLogin> {
    const response = await apiClient.post(API_ROUTES.AUTH.LOGIN, data);
    return response.data;
  },

  async register(data: RegisterFormValues): Promise<UserLogin> {
    const response = await apiClient.post(API_ROUTES.AUTH.REGISTER, data);
    return response.data;
  },
};
