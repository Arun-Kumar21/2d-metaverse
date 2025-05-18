"use client";

import React from "react";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { signupSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AuthCard from "@/components/auth/auth-card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupPage = (
) => {

  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
        setLoading(true);
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/signup`, {
            username: data.username,
            password: data.password,
            type: "User",
        })
        if (res.status === 200) {
            toast.success("Account created successfully, please sign in"); 
            form.reset();
            router.push("/auth/signin");
        }
    } catch (e) {
        console.log(e)

        if (axios.isAxiosError(e)) {
            if (e.response?.status === 400) {
                toast.error(e.response.data.message);
            } else {
                toast.error("Something went wrong");
            }
        }
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
              <h1 className="text-2xl font-bold">Get Started with Metaverse</h1>
              <p className="text-sm text-muted-foreground">Create an account</p>
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
              Sign up
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="underline underline-offset-4"
              >
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </AuthCard>
  );
};

export default SignupPage;
