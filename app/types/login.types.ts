import z from "zod";
import { loginSchema, registerSchema } from "../schema/loginschema";

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;

export interface User {
  id: string;
  username: string;
  email: string;
}
