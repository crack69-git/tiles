import { Trash2 } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-4 mt-10">
        <div className="flex flex-col gap-2">
          <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-full w-50 h-50"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">
                Ashutosh Tanchangya
              </h2>
              <p className="text-[16px] text-gray-500 mb-5">
                toshashu000089@gmail.com
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Edit Profile</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full shadow-sm">
            <div className="card-body py-3">
              <p className="flex items-center justify-center gap-3 text-lg font-semibold text-red-500">
                <Trash2 />
                Delete Account
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
