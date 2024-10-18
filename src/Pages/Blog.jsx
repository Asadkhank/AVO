// src/Pages/Blog.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogBG from '../assets/Hbg1.jpg';
import image from '../assets/keyboard.jpeg';
import Blogs from '../Components/Blogs';

const Blog = () => {
  

  return (
    <>
   <div
  className="relative h-screen flex items-center lg:items-center lg:justify-start text-start bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage: `url(${BlogBG})`,
  }}
>
  <div className="text-white lg:ml-32 flex-col ml-7">
    <div className="flex items-center">
      {/* Adjusted Home Link Positioning */}
      <div>
        <Link
          to="/"
          className="relative text-sm md:text-base lg:text-lg bg-transparent text-white pr-3 md:px-4 md:py-2 rounded hover:text-[red] transition duration-300"
        >
          HOME <span className="text-red-500">&gt;</span>
        </Link>
      </div>
      <div>
        <p className="text-sm md:text-base lg:text-lg text-white">
          BLOG <span className="text-red-500">&gt;</span>
        </p>
      </div>
    </div>

    {/* Adding margin-top to prevent overlap */}
    <div className="mt-8 lg:mt-10">
      <h1 className="text-white lg:text-5xl md:text-4xl font-bold text-3xl">
        BLOG
      </h1>
    </div>
  </div>

  {/* SVG at the Bottom for Styling the Four Edges */}
  <div className="absolute bottom-0 left-0 right-0 z-20 h-1/4"> {/* Ensure higher z-index and set height */}
    <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill="white"
        d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
      />
    </svg>
  </div>
</div>


      <Blogs cardCount={8} showSvg={false}  />
     
    </>
  );
};

export default Blog;
