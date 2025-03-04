"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct for Next.js 13+
//these is the search bar
//need to add css

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/Hubs?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className={SearchBar}>
      <input
        type="text"
        placeholder="Search Hubs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Press Enter to search
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
