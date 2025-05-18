"use client";

import AuthCard from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import axios from "axios";

import { signinSchema } from "@/schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

import useAuthStore from "@/store/useAuthStore";

const SigninPage = () => {
    const router = useRouter();

    const {login} = useAuthStore();
    
    const [loading, setLoading] = React.useState(false);
    

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signinSchema>) => {
    try {
        setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/signin`,
        {
          username: data.username,
          password: data.password,
        }
      );

      if (res.status === 200) {
        toast.success("Logged in successfully");
        login(res.data.token, {
          id: res.data.user.id,
          username: res.data.user.username,
          avatarId: res.data.user?.avatarId,
        });
        form.reset();
        router.push("/");
      }
    } catch (e) {
        if (axios.isAxiosError(e)) {
            if (e.response?.status === 400 || e.response?.status === 404) {
                form.setError("username", {
                    type: "manual",
                    message: "Invalid username or password",
                });
                form.setError("password", {
                    type: "manual",
                    message: "Invalid username or password",
                });
            }
            } else {
                toast.error("Something went wrong");
            }

        console.error(e);
    } finally {
        setLoading(false);
    }
  };

  return (
    <AuthCard className="w-full">
      <Form {...form}>
        <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-sm text-muted-foreground">
                Sign in to your account
              </p>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full">
              Sign in
            </Button>
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </AuthCard>
  );
};

export default SigninPage;
