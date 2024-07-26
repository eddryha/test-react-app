// pages/buttonPage.tsx
"use client";

import { useState } from "react";

export default function ButtonPage() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-4">Button Page</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Click Me
      </button>
      <p className="mt-4 text-xl">You clicked {count} times</p>
    </main>
  );
}
