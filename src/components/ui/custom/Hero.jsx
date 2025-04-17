import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 text-center">
      <h1 className="font-extrabold text-[50px] mt-16">
        <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips
      </h1>
      
      <p className="text-xl text-gray-500">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      {/* Proper navigation link */}
      <Link to="/create-trip">
        <button>Get Started, It's Free</button>
      </Link>
    </div>
  );
}

export default Hero;
