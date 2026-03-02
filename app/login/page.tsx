"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin, useRegister } from "../hooks/useLogin";
import { LoginFormValues, RegisterFormValues } from "../types/login.types";
import { loginSchema, registerSchema } from "../schema/loginschema";
import { useRouter } from "next/navigation";


export default function AuthForm() {
    const router = useRouter(); 
    const [mode, setMode] = useState<"login" | "register">("login");

    const loginMutation = useLogin();
    const registerMutation = useRegister();

    const defaultValuesLogin: LoginFormValues = {
        username: "",
        password: "",
    };

    const defaultValuesRegister: RegisterFormValues = {
        username: "",
        email: "",
        password: "",
    };

    const form = useForm<LoginFormValues | RegisterFormValues>({
        resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
        defaultValues: mode === "login" ? defaultValuesLogin : defaultValuesRegister,
    });

    const onSubmit = (values: any) => {
       
        if (mode === "login") {
            loginMutation.mutate(values, {
                onSuccess: () => {
                    router.push("/");
                },
            });
        } else {
            registerMutation.mutate(values, {
                onSuccess: () => {
                    setMode("login");
                    form.reset();
                },
            });
        }
    };

    const isLoading =
        loginMutation.isPending || registerMutation.isPending;

    const error =
        (loginMutation.error as Error)?.message ||
        (registerMutation.error as Error)?.message;

    return (
        <div className="flex min-h-screen items-center justify-center p-4 ">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full max-w-md mx-auto p-6 border-2 rounded-3xl"
                >
                    <h2 className="text-2xl font-bold text-[#303b4b] text-center">
                        {mode === "login" ? "Login" : "Register"}
                    </h2>

                    {/* Username */}
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <Label>Username</Label>
                                <Input {...field} placeholder="Username" />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email only for register */}
                    {mode === "register" && (
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Email</Label>
                                    <Input {...field} placeholder="Email" type="email" />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {/* Password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <Label>Password</Label>
                                <Input {...field} placeholder="Password" type="password" />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Error message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button type="submit" className="w-full bg-[#4880FF]" disabled={isLoading}>
                        {isLoading
                            ? mode === "login"
                                ? "Logging in..."
                                : "Registering..."
                            : mode === "login"
                                ? "Login"
                                : "Register"}
                    </Button>

                    {/* Toggle link */}
                    <p className="text-center text-sm text-[#3F3F3F]">
                        {mode === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"}{" "}
                        <button
                            type="button"
                            className="text-[#4880FF] font-semibold underline"
                            onClick={() => {
                                setMode(mode === "login" ? "register" : "login");
                                form.reset();
                            }}
                        >
                            {mode === "login" ? "Register" : "Login"}
                        </button>
                    </p>
                </form>
            </Form>
        </div>
    );
}