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
        className="h-screen flex items-center justify-start text-start bg-cover bg-center"
        style={{
          backgroundImage: `url(${BlogBG})`,
        }}
      >
        <h1 className="text-6xl font-bold ml-32 mt-24 text-white">
          Blog
        </h1>

        {/* Transparent Button to Navigate to Home */}
        <Link to="/" className="absolute justify-start ml-24 left-5 bg-transparent text-white px-4 py-2 rounded hover:text-[red] transition duration-300">
          Home <span className='text-red-500'>&gt;</span>
        </Link>
        <p className='-ml-16 text-white'> blog <span className='text-red-500'>&gt;</span> </p>

        {/* SVG at the Bottom for Styling the Four Edges */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full"
            viewBox="0 0 1440 320" // Ensure the correct viewBox size for the SVG
            preserveAspectRatio="none"
          >
            <path
              fill="white" // Change this color if needed
              d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z" // Four Edges Path
            />
          </svg>
        </div>
      </div>
      <Blogs cardCount={8} showSvg={false}  />
     
    </>
  );
};

export default Blog;
