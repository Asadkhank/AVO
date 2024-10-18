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

  const [currentBackground, setCurrentBackground] = useState(HomeBG);
  
  const [content, setContent] = useState({
    title: (
      <>
        WE BUILD <br /> INNOVATIVE <br /> & CREATIVE WEBSITES
      </>
    ),
    description: "Transforming your ideas into stunning digital realities.",
    projectCount: 400,
    experience: (
      <>
        Over <br /> 200 successful <br /> projects
      </>
    ),
  });

  const [liveCount, setLiveCount] = useState(0);
  const [isHomeBGAnimated, setIsHomeBGAnimated] = useState(false);
  const [isHomeBG1Animated, setIsHomeBG1Animated] = useState(false);
  
  const finalHomeBGCount = 400;
  const finalHomeBG1Count = 20;

  const animateCount = (start, end, duration) => {
    let startTime = null;

    const countUp = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * (end - start)) + start, end);

      setLiveCount(currentCount);

      if (progress < duration) {
        window.requestAnimationFrame(countUp);
      }
    };

    window.requestAnimationFrame(countUp);
  };

  useEffect(() => {
    animateCount(0, finalHomeBGCount, 2000);
    setIsHomeBGAnimated(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) => {
        if (prevBackground === HomeBG) {
          setContent({
            title: (
              <>
                WE DESIGN <br /> BEAUTIFUL & <br /> FUNCTIONAL WEBSITES
              </>
            ),
            description: "Elevate your online presence with our expertise.",
            projectCount: finalHomeBG1Count,
            experience: (
              <>
                Years of <br /> Excellence
              </>
            ),
          });

          if (!isHomeBG1Animated) {
            animateCount(0, finalHomeBG1Count, 2000);
            setIsHomeBG1Animated(true);
          } else {
            setLiveCount(finalHomeBG1Count);
          }

          return HomeBG1;
        } else {
          setContent({
            title: (
              <>
                WE BUILD <br /> INNOVATIVE <br /> & CREATIVE WEBSITES
              </>
            ),
            description: "Transforming your ideas into stunning digital realities.",
            projectCount: finalHomeBGCount,
            experience: (
              <>
                Over <br /> 200 successful <br /> projects
              </>
            ),
          });

          if (!isHomeBGAnimated) {
            animateCount(0, finalHomeBGCount, 2000);
            setIsHomeBGAnimated(true);
          } else {
            setLiveCount(finalHomeBGCount);
          }

          return HomeBG;
        }
      });
    }, 4000);

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
        <div className="flex flex-col items-start md:items-end ml-8 sm:ml-8 md:absolute right-4 sm:right-8 md:right-32 mt-28 sm:mt-20 md:mt-44 bg-transparent text-white order-1 md:order-none">
          <div className="text-left md:text-right">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {liveCount}
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">
              {content.experience}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start ml-4 md:ml-32 mt-8 sm:mt-12 md:mt-44 z-10 px-4 md:px-0 order-2 md:order-none">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-left leading-tight">
            {content.title}
          </h1>
          <p className="text-white mt-4 text-xs sm:text-sm md:text-base">
            {content.description}
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-3 md:py-3 md:px-4 rounded">
            {currentBackground === HomeBG1 ? "Discover More" : "Get Started"}
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <a href="https://www.youtube.com/watch?v=O_ggNS22LQ8" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full">
              <FaPlay className="w-6 h-6 sm:w-8 sm:h-8 text-black cursor-pointer" />
            </div>
          </a>
        </div>

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

      <div
        className="mx-4 md:mx-8 lg:mx-32 h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeBG})` }}
      >
        <div className="flex flex-col pt-20 pl-4 md:pl-10 lg:pl-14 items-start">
          <h2 className="text-lg md:text-xl text-red-600">Get Started</h2>
          <p className="text-white text-2xl md:text-4xl font-sans mt-2">
            Fill in the brief and get the <br /> project estimate
          </p>
          <p className="text-white pt-2 md:pt-4 text-sm md:text-base lg:text-lg">
            Far far away, behind the word mountains, far from the <br /> countries
            Vokalia and Consonantia, there live the blind <br /> texts.
          </p>

          <button className="mt-6 bg-red-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-white hover:text-red-600 transition duration-300">
            Start Your Journey
          </button>
        </div>
      </div>

      <div className="bg-blue-200"> 
        <Blogs cardCount={4} />
      </div>
    </>
  );
};

export default Home;
