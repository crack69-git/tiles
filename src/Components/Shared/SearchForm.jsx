"use client";
import React from "react";

const SearchForm = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };

  return (
    <form
      onSubmit={handleSearch}
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
        <input type="search" required placeholder="Search" />
      </label>
      <button className="btn btn-soft btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
