import React from "react";
import img from '../assets/images1.jpeg';
import pentool from '../assets/pentool.png';
import webpic from '../assets/webdevelopment.png';
import Layers from '../assets/Layer.png'; 
import MobileApp from '../assets/MobileApp.png'; 
import Search from '../assets/Search.png';

const AboutUsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="mx-4 md:mx-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">ABOUT US</h2>
          <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-10 mb-12">
            {/* Icons Section */}
            {[
              { src: pentool, alt: "UI/UX Design", label: "UI/UX Design" },
              { src: webpic, alt: "Web Development", label: "Web Development" },
              { src: Layers, alt: "Product Design", label: "Product Design" },
              { src: MobileApp, alt: "Mobile Apps", label: "Mobile Apps" },
              { src: Search, alt: "SEO", label: "SEO" },
            ].map(({ src, alt, label }) => (
              <div className="flex flex-col items-center mb-4 sm:mb-0" key={alt}>
                <img src={src} alt={alt} className="mb-2 h-20 sm:h-28" />
                <p className="font-semibold text-sm sm:text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="text-left">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Welcome to AVO A Personal Portfolio Web Agency
            </h3>
            <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It
              is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="Office"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="text-left">
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <button className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              View all projects
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[ 
            { number: "01", title: "Search Engine Optimization", description: "Far far away, behind the word mountains" },
            { number: "02", title: "Web Development", description: "Far far away, behind the word mountains" },
            { number: "03", title: "Mobile Apps", description: "Far far away, behind the word mountains" }
          ].map(({ number, title, description }) => (
            <div className="text-center" key={number}>
              <div className="flex items-start">
                <h1 className="text-4xl md:text-5xl font-bold text-red-500 mt-3 leading-9 relative">
                  {number}
                  <span className="absolute left-0 bottom-[-20px] w-full h-[1px] bg-black"></span>
                </h1>
                <div className="ml-2">
                  <p className="text-lg md:text-xl font-semibold">{title}</p>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
