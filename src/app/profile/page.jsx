"use client";
import { authClient } from "@/lib/auth-client";
import { Squirrel, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const { data: session } = authClient.useSession();
  const profileImage =
    typeof session?.user?.image === "string"
      ? session.user.image
      : session?.user?.image?.url || session?.user?.image?.src || null;
  return (
    <div className="w-6/12 mx-auto mt-10">
      <div className="card bg-base-100  shadow-sm">
        <figure className="px-10 pt-10">
          {profileImage ? (
            <div className="border-2 p-2 rounded-lg">
              <Image
                src={profileImage}
                alt="Profile Picture"
                width={100}
                height={100}
                loading="eager"
                className=""
              />
            </div>
          ) : (
            <div className=" flex h-37.5 w-37.5 items-center justify-center rounded-full bg-base-200 text-4xl font-bold text-base-content/50">
              ?
            </div>
          )}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">
            Name: {session?.user?.name || "User Name"}
          </h2>
          <p className="text-[16px] text-gray-500 mb-5">
            Email: {session?.user?.email || "user@example.com"}
          </p>
          <Link href="/profile/update-profile">
            <div className="card-actions">
              <button className="btn btn-primary">
                <Squirrel /> Update Profile
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
