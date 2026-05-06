"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const NavbarSection = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const navImage =
    typeof session?.user?.image === "string"
      ? session.user.image
      : session?.user?.image?.url || session?.user?.image?.src || null;
  // console.log("Session data:", session);
  // console.log(isPending);
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/all">All Tiles</NavLink>
      </li>
      <li>
        <NavLink href="/profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex flex-col">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-[16px] font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : session ? (
            <div className="flex items-center gap-3">
              {navImage ? (
                <Image
                  src={navImage}
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-base-200 flex items-center justify-center text-sm">
                  U
                </div>
              )}
              <button
                className="btn btn-primary"
                onClick={async () => {
                  await authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        router.push("/login"); // redirect to login page
                      },
                    },
                  });
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
