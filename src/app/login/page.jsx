"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const loginFunc = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(loginFunc)}
          className="flex items-center justify-center mt-10"
        >
          <fieldset className="fieldset w-4/12 bg-base-200 border-base-300 rounded-box border py-10 px-8">
            <h2 className="text-center text-4xl font-bold">Login</h2>
            <p className="text-center text-[16px] text-gray-500">
              Login to your account
            </p>
            <label className="label text-lg font-semibold">Email</label>
            <input
              type="email"
              className="input w-full"
              {...register("email")}
              placeholder="Email"
            />
            <label className="label text-lg font-semibold">Password</label>
            <input
              type="password"
              className="input w-full"
              {...register("password")}
              placeholder="Password"
            />
            <p className="text-gray-500 text-[15px] ">
              Don't have account ?{" "}
              <Link
                href="/signup"
                className="text-blue-500 cursor-pointer hover:underline active:text-red-600"
              >
                Sign Up
              </Link>
            </p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
