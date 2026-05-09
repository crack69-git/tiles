"use client";
import React from "react";
import tilesImg from "@/assests/tilesImg.jpeg";
import Image from "next/image";
import Link from "next/link";
const Card = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-sm h-full">
      <figure className="px-10 pt-10 h-1/2">
        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={300}
          className="rounded-xl h-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions">
          <Link href={`/all/${data.id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
