"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import tilesData from "../../../../public/tilesData.json";
import { FileText } from "lucide-react";

const CardDetails = () => {
  const { id } = useParams();
  const selectedTile = tilesData.find((tile) => tile.id === id);
  const {
    title,
    description,
    category,
    material,
    dimensions,
    price,
    currency,
    inStock,
  } = selectedTile;

  const showMaterialBadge = () => {
    if (category === material) {
      return false;
    } else {
      return true;
    }
  };
  const similarItems = tilesData.filter(
    (tile) => tile.category === category && tile.id !== id,
  );
  return (
    <div className="mt-10">
      <div className="card card-side bg-base-100 shadow-sm w-3/4 mx-auto">
        <figure className="relative">
          <div className="absolute top-4 left-4">
            {inStock ? (
              <div className="badge badge-success p-3 text-lg">In Stock</div>
            ) : (
              <div className="badge badge-error p-3 text-lg">Out of Stock</div>
            )}
          </div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="w-100 rounded-3xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl mb-5 font-bold">{title}</h2>
          <div className="flex flex-wrap gap-3">
            {selectedTile.material.map((mat, index) => (
              <div
                key={index}
                className={`badge badge-soft p-3 text-lg ${showMaterialBadge() ? "badge-primary" : "badge-secondary"}`}
              >
                {mat}
              </div>
            ))}
          </div>
          <div className="w-full h-0.5 bg-gray-200 my-5"></div>

          <p className="text-lg text-gray-500">{description}</p>
          <p className="text-lg ">
            Dimensions: <span className="text-gray-500">{dimensions}</span>
            <br />
            Price:{" "}
            <span className="text-gray-500">{`${price} ${currency}`}</span>
          </p>
          <div className="flex gap-3">
            <button className="btn btn-primary">Buy now</button>
            <button className="btn btn-soft">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="mt-10 py-4 px-6 rounded-lg shadow-sm w-3/4 mx-auto bg-gray-300">
        <p className="text-xl font-semibold">Browse Similar category Items:</p>
        <div>
          {similarItems.length > 0 ? (
            <div className="grid grid-cols-4 mt-5 gap-5">
              {similarItems.map((item) => (
                <div
                  key={item.id}
                  className="card bg-base-100 shadow-sm h-full"
                >
                  <figure className="px-10 pt-10">
                    img
                    {/* <Image
                      width={400}
                      height={300}
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                      className="rounded-xl"
                    /> */}
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions">
                      <Link href={`/all/${item.id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="my-5 w-full h-50 bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-3">
              <FileText className="w-auto h-20" />
              <p className="text-2xl font-bold">No similar items found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
