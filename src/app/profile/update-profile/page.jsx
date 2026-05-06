"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: session?.user?.name || "",
      photo: session?.user?.image || "",
    },
  });

  const updateHandle = async (data) => {
    const { name, photo } = data;
    const { error } = await authClient.updateUser({
      name,

      image: photo || null,
    });

    if (error) {
      console.error("Update failed:", error.message || error);
      return;
    }

    router.push("/profile");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit(updateHandle)}
      className="mt-10 w-4/12 mx-auto bg-base-200 border-base-300 border rounded-box"
    >
      <fieldset className="fieldset py-10 px-8">
        <p className="text-2xl font-bold text-center">Update Profile</p>

        <label className="label text-[16px] font-semibold">Name</label>
        <input
          type="text"
          {...register("name")}
          className="input w-full"
          placeholder="Your Name"
        />

        <label className="label text-[16px] font-semibold">Photo Link</label>
        <input
          type="text"
          {...register("photo")}
          className="input w-full"
          placeholder="https://example.com/photo.jpg"
        />

        <button
          type="submit"
          className="btn btn-primary mt-6 w-full"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Updating..." : "Update"}
        </button>
      </fieldset>
    </form>
  );
};

export default UpdateProfile;
