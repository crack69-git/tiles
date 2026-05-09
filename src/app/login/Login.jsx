"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const loginFunc = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message || "Wrong password");
      return;
    }

    if (res) {
      alert("Login successful");
    }
  };

  const signIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      alert(error.message || "Social login failed");
      return;
    }

    if (data) {
      alert("Login successful");
    }
  };
  return (
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
            Don&apos;t have account ?{" "}
            <Link
              href="/signup"
              className="text-blue-500 cursor-pointer hover:underline active:text-red-600"
            >
              Sign Up
            </Link>
          </p>
          <div className="flex justify-evenly items-center gap-2 my-4">
            <div className="h-0.5 w-full border border-gray-300"></div>
            <div className="text-gray-500 w-full text-center">
              or Login with
            </div>
            <div className="h-0.5 w-full border border-gray-300"></div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={signIn}
              className="btn btn-primary gap-2"
              type="button"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 10.2v3.95h5.62c-.24 1.34-1.73 3.93-5.62 3.93-3.38 0-6.14-2.8-6.14-6.25S8.62 5.58 12 5.58c1.93 0 3.23.82 3.97 1.53l2.7-2.6C16.96 3 14.7 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c5.75 0 9.56-4.05 9.56-9.76 0-.66-.07-1.16-.15-1.66H12z" />
              </svg>
              Google
            </button>
            <button className="btn btn-soft btn-primary gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.13-4.56-5.04 0-1.11.38-2.01 1.02-2.72-.1-.26-.44-1.32.1-2.76 0 0 .84-.27 2.75 1.04A9.18 9.18 0 0 1 12 6.8c.85 0 1.71.12 2.5.34 1.9-1.31 2.74-1.04 2.74-1.04.54 1.44.2 2.5.1 2.76.63.71 1.01 1.61 1.01 2.72 0 3.92-2.35 4.78-4.59 5.03.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.58.69.48A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
              </svg>
              GitHub
            </button>
          </div>
          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
