import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className="shrink-0">
      <input
        placeholder="Enter order ID#"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-36 rounded-full bg-white px-4 py-2 text-sm text-stone-900 transition-all duration-300 placeholder:text-stone-400 focus:w-40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchInput;
