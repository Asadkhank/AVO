import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import HomeBG from "../assets/Hbg1.jpg";
import HomeBG1 from "../assets/images.jpeg";
import { FaPlay } from "react-icons/fa";
import AboutUsSection from "../Components/AboutUsSection";
import Portfolio from "../Components/Portfolio";
import Testimonial from "../Components/Testimonial";
import Blogs from "../Components/Blogs.jsx";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    
  // State to manage the background image
  const [currentBackground, setCurrentBackground] = useState(HomeBG);

  // State to manage content for each background
  const [content, setContent] = useState({
    title: (
      <>
        WE CREATE <br /> MODERN <br /> & MINIMAL WEBSITES
      </>
    ),
    description: "A small river named Duden flows by their and supplies it with the necessary regelialie.",
    projectCount: 400, // Default project count for HomeBG
    experience: (
      <>
        More than a <br /> hundred successful <br /> projects
      </>
    ), // Default description for HomeBG
  });

  // State to keep track of the live count
  const [liveCount, setLiveCount] = useState(0);

  // State to track whether the animation has run for each background
  const [isHomeBGAnimated, setIsHomeBGAnimated] = useState(false);
  const [isHomeBG1Animated, setIsHomeBG1Animated] = useState(false);

  // Final counts for each background
  const finalHomeBGCount = 400;
  const finalHomeBG1Count = 20;

  // Function to animate the counting
  const animateCount = (start, end, duration) => {
    let startTime = null;

    const countUp = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * (end - start)) + start, end);

      setLiveCount(currentCount); // Update the live count state

      if (progress < duration) {
        window.requestAnimationFrame(countUp);
      }
    };

    window.requestAnimationFrame(countUp);
  };

  // useEffect to animate the count immediately on page load
  useEffect(() => {
    // Animate to 400 for the initial background (HomeBG)
    animateCount(0, finalHomeBGCount, 2000); // Animate from 0 to 400 over 2 seconds
    setIsHomeBGAnimated(true); // Mark HomeBG as animated
  }, []);

  // useEffect to alternate background images and update content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) => {
        if (prevBackground === HomeBG) {
          setContent({
            title: (
              <>
                WE CREATE <br /> MODERN & <br /> MINIMAL WEBSITES
              </>
            ),
            description: "Achieve your dreams with our minimalistic approach.",
            projectCount: finalHomeBG1Count, // Set to 20 for HomeBG1
            experience: (
              <>
                Years of <br /> Experience
              </>
            ), // Change description for HomeBG1
          });

          // Animate to 20 only if it hasn't been animated yet
          if (!isHomeBG1Animated) {
            animateCount(0, finalHomeBG1Count, 2000); // Animate from 0 to 20 over 2 seconds
            setIsHomeBG1Animated(true); // Mark it as animated
          } else {
            setLiveCount(finalHomeBG1Count); // Directly set to 20 if already animated
          }

          return HomeBG1;
        } else {
          setContent({
            title: (
              <>
                WE CREATE <br /> MODERN & <br /> MINIMAL WEBSITES
              </>
            ),
            description: "A small river named Duden flows by their and supplies it with the necessary regelialie.",
            projectCount: finalHomeBGCount, // Reset to 400 for HomeBG
            experience: (
              <>
                More than a <br /> hundred successful <br /> projects
              </>
            ), // Reset description for HomeBG
          });

          // Animate to 400 only if it hasn't been animated yet
          if (!isHomeBGAnimated) {
            animateCount(0, finalHomeBGCount, 2000); // Animate from 0 to 400 over 2 seconds
            setIsHomeBGAnimated(true); // Mark it as animated
          } else {
            setLiveCount(finalHomeBGCount); // Directly set to 400 if already animated
          }

          return HomeBG;
        }
      });
    }, 4000); // 4 seconds interval for background and content change

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, [isHomeBGAnimated, isHomeBG1Animated]);

  return (
    <>
    <div
      className="h-screen flex flex-col md:flex-row bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${currentBackground})`,
      }}
    >
      {/* Projects Section - This will appear above the content on mobile and aligned to the left */}
      <div className="flex flex-col items-start md:items-end ml-8 sm:ml-8 md:absolute right-4 sm:right-8 md:right-32 mt-28 sm:mt-20 md:mt-44 bg-transparent text-white order-1 md:order-none">
        {/* Wrap the count and experience in a div for right alignment on larger screens */}
        <div className="text-left md:text-right">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {liveCount} {/* Use liveCount instead of content.projectCount */}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-lg">
            {content.experience} {/* Dynamic description */}
          </p>
        </div>
      </div>

      {/* Content for HomeBG - This will appear below the project section on mobile */}
      <div className="flex flex-col justify-start items-start ml-4 md:ml-32 mt-8 sm:mt-12 md:mt-44 z-10 px-4 md:px-0 order-2 md:order-none">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-left leading-tight">
          {content.title} {/* Render title directly */}
        </h1>
        <p className="text-white mt-4 text-xs sm:text-sm md:text-base">
          {content.description}
        </p>
        <button className="mt-4 bg-red-600 text-white py-2 px-3 md:py-3 md:px-4 rounded">
          {currentBackground === HomeBG1 ? "Explore Project" : "Start Project"}
        </button>
      </div>

       {/* Video Icon positioned above the third edge */}
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="https://www.youtube.com/watch?v=O_ggNS22LQ8" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full">
            <FaPlay className="w-6 h-6 sm:w-8 sm:h-8 text-black cursor-pointer" />
          </div>
        </a>
      </div>

      {/* SVG at the Bottom for Styling the Four Edges */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="white"
            d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>


      <AboutUsSection />
      <Portfolio />
      <Testimonial />

      {/* Full-width div with left and right margin, height set to half, using a background image */}
<div
  className="mx-4 md:mx-8 lg:mx-32 h-96 bg-cover bg-center"
  style={{ backgroundImage: `url(${HomeBG})` }}
>
  {/* Add content here if needed */}
  <div className="flex flex-col pt-20 pl-4 md:pl-10 lg:pl-14 items-start">
    <h2 className="text-lg md:text-xl text-red-600">Get Started</h2>
    <p className="text-white text-2xl md:text-4xl font-sans mt-2">
      Fill in the brief and get the <br /> project estimate
    </p>
    <p className="text-white pt-2 md:pt-4 text-sm md:text-base lg:text-lg">
      Far far away, behind the word mountains, far from the <br /> countries
      Vokalia and Consonantia, there live the blind <br /> texts.
    </p>

    {/* Button */}
    <button className="mt-6 bg-red-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-white hover:text-red-600 transition duration-300">
      Get Started
    </button>
  </div>
</div>
<div>
<div className="bg-blue-200"> 

<Blogs cardCount={4} />
</div>
</div>
    </>
  );
};

export default Home;
