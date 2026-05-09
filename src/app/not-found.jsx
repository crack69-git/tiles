"use client";
import React from "react";
import Link from "next/link";

const Notfound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-white bg-green-700 rounded-full w-max mx-auto px-3 py-1">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-neutral-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 gap-3">
          <Link
            href="/"
            className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-medium text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Notfound;
