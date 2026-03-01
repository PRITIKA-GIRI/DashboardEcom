import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../lib/query-keys";
import { useAuthStore } from "../store/authStore";
import { authService } from "../services/loginService";
import { toast } from "sonner";


export const useLogin = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationKey: QUERY_KEYS.AUTH.LOGIN,
    mutationFn: authService.login,
    onSuccess: (data) => {
      toast.success("Login successful!");
          setUser(
            {
              id: data.id,
              username: data.username,
              email: data.email,
              token: data.token,
            },
            data.token,
          );

    },
  });
};

export const useRegister = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationKey: QUERY_KEYS.AUTH.REGISTER,
    mutationFn: authService.register,
    onSuccess: (data) => {
      setUser(
        {
          id: data.id,
          username: data.username,
          email: data.email,
          token: data.token,
        },
        data.token,
      );
    },
  });
};

