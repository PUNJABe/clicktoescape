"use client";

import { useState, useEffect } from "react";
import { getRandomSite } from "@/lib/sites";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const gradients = [
    "from-red-500 via-pink-500 to-purple-600",
    "from-blue-500 via-green-500 to-teal-500",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-green-400 via-blue-500 to-purple-600",
    "from-pink-500 via-red-500 to-yellow-500",
  ];
  const [bgGradient, setBgGradient] = useState(
    gradients[Math.floor(Math.random() * gradients.length)]
  );

  // cycle through gradients every 10 seconds
  useEffect(() => {
    const iv = setInterval(() => {
      setBgGradient(gradients[Math.floor(Math.random() * gradients.length)]);
    }, 10000);
    return () => clearInterval(iv);
  }, []);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);

    const randomSite = getRandomSite();
    window.open(randomSite, "_blank");

    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <main
      className={`relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ${bgGradient} bg-fade text-white transition-colors duration-1000 p-6`}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-12">
        Escape Your Boredom
      </h1>

      {loading ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="loader" />
          <p className="text-lg font-medium">Teleporting... ✨</p>
        </div>
      ) : (
        <button
          id="awayBtn"
          onClick={handleClick}
          disabled={loading}
          className="btn-modern pulse-glow"
        >
          Take Me Away 🚀
        </button>
      )}

      <p className="mt-16 text-sm text-white/80">
        Inspired by the curious joy of randomness
      </p>
    </main>
  );
}
