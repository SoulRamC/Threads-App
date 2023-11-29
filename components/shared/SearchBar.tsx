"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
interface SearchBarProps {
  path: string;
}
function SearchBar({ path }: SearchBarProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search === "") {
      router.push(`${path}`);
    } else {
      router.push(`${path}?search=${search}`);
    }
  }, [search, router, path]);
  return (
    <div className="flex items-center bg-[#1e1e1e] p-2 rounded">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="flex-1 px-4 py-2 bg-transparent text-white focus:outline-none"
      />
      <button className="bg-primary-500 px-4 py-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="#fff"
            d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 16 9.5 6.5 6.5 0 0 0 9.5 3 6.5 6.5 0 0 0 3 9.5 6.5 6.5 0 0 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14a4.5 4.5 0 0 1 0-9 4.5 4.5 0 0 1 0 9z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
