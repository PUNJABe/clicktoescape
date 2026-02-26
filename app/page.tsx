"use client";

import { useState, useEffect } from "react";
import { getRandomSite } from "@/lib/sites";

export default function Home() {
  const [loading, setLoading] =useState(false);
  const [particles, setParticles] = useState<Array<any>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 6,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
      }))
    );
  }, []);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    const randomSite = getRandomSite();
    setTimeout(() => {
      window.location.href = randomSite;
    }, 1500);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-black to-pink-900 bg-fade text-white">
      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            top: particle.top + "%",
            left: particle.left + "%",
            width: particle.size + "px",
            height: particle.size + "px",
            animationDelay: particle.delay + "s",
            animationDuration: particle.duration + "s",
          }}
        />
      ))}

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

      <div className="z-10 text-center px-6 space-y-8">
        <div className="slide-in space-y-4">
          <div className="text-sm font-semibold tracking-widest text-purple-300 uppercase">Feeling Bored?</div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
            Escape Your Boredom
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">Click the button and let the internet surprise you with something amazing</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center space-y-6 py-8">
            <div className="loader" />
            <div className="space-y-2">
              <p className="text-2xl font-semibold">Preparing your escape...</p>
              <p className="text-gray-400 text-sm">Hold tight!</p>
            </div>
          </div>
        ) : (
          <div className="pt-8">
            <button
              onClick={handleClick}
              className="relative inline-block px-12 py-6 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 transition-all duration-300 shadow-2xl pulse-glow button-float transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
            >
              🚀 Click Me To Kill Boredom
            </button>
            <p className="text-xs text-gray-500 mt-4">Redirecting to your adventure...</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="bg-white/5 backdrop-blur-md rounded-full px-6 py-2 border border-white/10 text-xs text-gray-400">
          🌍 Discover • Explore • Escape
        </div>
      </div>
    </main>
  );
}
