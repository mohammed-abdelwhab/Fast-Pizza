import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mx-1 font-display text-[clamp(1.1rem,4vw,3rem)] font-black leading-[0.9] tracking-wide text-basil-500 md:text-[clamp(0.8rem,3.4vw,2rem)]">
        Please start by telling us your name:
      </p>

      <input
        className="mt-3 w-64 rounded-full border-2 border-stone-300 bg-white px-4 py-2 text-sm text-stone-900 transition-all duration-300 placeholder:font-display placeholder:text-stone-400 focus:w-72 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40 md:w-80 md:focus:w-96"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <button className="ml-1 mt-3 rounded-full bg-red-600 px-6 py-2.5 font-body text-sm font-extrabold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
          Start ordering
        </button>
      )}
    </form>
  );
}

export default CreateUser;
