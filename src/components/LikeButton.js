"use client";

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button 
      onClick={(e) => {
        e.preventDefault(); // Prevent link navigation when clicking like inside the link area
        setLikes(likes + 1);
      }}
      className="mt-6 flex items-center gap-2 px-5 py-2.5 bg-purple-50 text-purple-600 border border-purple-100 rounded-full hover:bg-purple-100 hover:scale-105 transition-all duration-300 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
    >
      <span className="text-lg">❤️</span>
      <span>Like</span>
      <span className="bg-purple-200/50 px-2 py-0.5 rounded-full text-sm font-bold ml-1">{likes}</span>
    </button>
  );
}
