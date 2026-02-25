import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../lib/query-keys";
import { useAuthStore } from "../store/authStore";
import { authService } from "../services/loginService";


export const useLogin = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationKey: QUERY_KEYS.AUTH.LOGIN,
    mutationFn: authService.login,
    onSuccess: (data) => {
      setUser(data);
    },
  });
};

export const useRegister = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationKey: QUERY_KEYS.AUTH.REGISTER,
    mutationFn: authService.register,
    onSuccess: (data) => {
      setUser(data);
    },
  });
};

