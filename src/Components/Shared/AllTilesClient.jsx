"use client";
import React, { useState } from "react";
import AllCardSection from "./AllCardSection";

const AllTilesClient = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      (item.title && item.title.toLowerCase().includes(searchLower)) ||
      (item.description &&
        item.description.toLowerCase().includes(searchLower)) ||
      (item.category && item.category.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="text-center mt-10">
      <h2 className="text-6xl font-bold mb-3">All Tiles</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Searching for:", searchQuery);
        }}
        className="mb-10 flex items-center justify-center gap-2"
      >
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
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <button className="btn btn-soft btn-primary" type="submit">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <AllCardSection key={index} item={item} />
          ))
        ) : (
          <p className="col-span-4 text-gray-500">
            No tiles found matching "{searchQuery}"
          </p>
        )}
      </div>
    </div>
  );
};

export default AllTilesClient;
