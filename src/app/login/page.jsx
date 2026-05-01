import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <fieldset className="fieldset w-4/12 bg-base-200 border-base-300 rounded-box border py-10 px-8">
          <h2 className="text-center text-4xl font-bold">Login</h2>
          <p className="text-center text-[16px] text-gray-500">
            Login to your account
          </p>
          <label className="label text-lg font-semibold">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label text-lg font-semibold">Password</label>
          <input
            type="password"
            className="input w-full"
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
      </div>
    </div>
  );
};

export default LoginPage;
