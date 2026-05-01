"use client";
import React from "react";
import tilesImg from "@/assests/tilesImg.jpeg";
import Image from "next/image";
const Card = ({ data }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm h-full">
        <figure className="px-10 pt-10">
          <Image src={tilesImg} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
