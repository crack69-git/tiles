import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <fieldset className="fieldset w-4/12 bg-base-200 border-base-300 rounded-box border py-10 px-8">
          <h2 className="text-center text-4xl font-bold">Register</h2>
          <p className="text-center text-[16px] text-gray-500">
            Create your account
          </p>
          <label className="label text-lg font-semibold">Full Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Full Name"
            required
          />
          <label className="label text-lg font-semibold">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            required
          />
          <label className="label text-lg font-semibold">Picture</label>
          <input required type="file" className="file-input w-full" />
          <label className="label text-lg font-semibold">Password</label>
          <input
            type="password"
            className="input validator w-full"
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
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUpPage;
