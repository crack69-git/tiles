import AllCardSection from "@/Components/Shared/AllCardSection";
import Card from "@/Components/Shared/Card";
import { Label, SearchField } from "@heroui/react";
import React from "react";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/tilesData.json");
  return res.json();
};
const page = async () => {
  const data = await fetchData();
  console.log("data", data);
  return (
    <div className="text-center mt-10">
      <h2 className="text-6xl font-bold mb-3">All Tiles</h2>
      <div className="mb-10">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* <p>data.length: {data.length}</p> */}
        {data.map((item, index) => (
          <AllCardSection key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
