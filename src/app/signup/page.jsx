"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const signUpFunc = async (data) => {
    const { name, email, picture, password } = data;
    let image = null;
    if (picture && picture.length > 0) {
      try {
        image = await toBase64(picture[0]);
      } catch (err) {
        console.error("Failed to read image file:", err);
      }
    }

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image, // required (send base64 data URL)
      callbackURL: "/login",
    });
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(signUpFunc)}
          className="flex items-center justify-center mt-10"
        >
          <fieldset className="fieldset w-4/12 bg-base-200 border-base-300 rounded-box border py-10 px-8">
            <h2 className="text-center text-4xl font-bold">Register</h2>
            <p className="text-center text-[16px] text-gray-500">
              Create your account
            </p>
            <label className="label text-lg font-semibold">Full Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("name")}
              placeholder="Full Name"
              required
            />
            <label className="label text-lg font-semibold">Email</label>
            <input
              type="email"
              className="input w-full"
              {...register("email")}
              placeholder="Email"
              required
            />
            <label className="label text-lg font-semibold">Picture</label>
            <input
              required
              type="file"
              accept="image/*"
              {...register("picture")}
              className="file-input w-full"
            />
            <label className="label text-lg font-semibold">Password</label>
            <input
              type="password"
              className="input validator w-full"
              {...register("password")}
              required
              placeholder="Password"
            />

            <p className="text-gray-500 text-[15px] ">
              Already have account ?{" "}
              <Link
                href="/login"
                className="text-blue-500 cursor-pointer hover:underline active:text-red-600"
              >
                Login
              </Link>
            </p>
            <button className="btn btn-neutral mt-4">Sign Up</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
