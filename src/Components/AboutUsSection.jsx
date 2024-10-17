import React from "react";
import img from '../assets/images1.jpeg';
import pentool from '../assets/pentool.png';
import webpic from '../assets/webdevelopment.png';
import Layers from '../assets/Layer.png'; //
import MobileApp from '../assets/MobileApp.png'; //
import Search from '../assets/Search.png';

const AboutUsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="mx-4 md:mx-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">ABOUT US</h2>
          <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-10 mb-12">
            {/* Icons Section */}
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <img src={pentool} alt="UI/UX Design" className="mb-2 h-20 sm:h-28" />
              <p className="font-semibold">UI/UX Design</p>
            </div>
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <img src={webpic} alt="Web Development" className="mb-2 h-20 sm:h-28" />
              <p className="font-semibold">Web Development</p>
            </div>
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <img src={Layers} alt="Product Design" className="mb-2 h-20 sm:h-28" />
              <p className="font-semibold">Product Design</p>
            </div>
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <img src={MobileApp} alt="Mobile Apps" className="mb-2 h-20 sm:h-28" />
              <p className="font-semibold">Mobile Apps</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Search} alt="SEO" className="mb-2 h-20 sm:h-28" />
              <p className="font-semibold">SEO</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold">
              Welcome to AVO A Personal Portfolio Web Agency
            </h3>
            <p className="mt-4 text-gray-600">
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
            <p className="text-gray-600">
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
          <div className="text-center">
            <div className="flex items-start">
              <h1 className="text-5xl md:text-6xl font-bold text-red-500 mt-3 leading-9 relative">
                01
                <span className="absolute left-0 bottom-[-20px] w-full h-[1px] bg-black"></span>
              </h1>
              <div className="ml-2">
                <p className="text-xl md:text-2xl text-start font-semibold">
                  Search Engine <br /> Optimization
                </p>
                <p className="text-start text-gray-600 mt-2">
                  Far far away, behind the word mountains
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-start">
              <h1 className="text-5xl md:text-6xl font-bold text-red-500 mt-3 leading-9 relative">
                02
                <span className="absolute left-0 bottom-[-20px] w-full h-[1px] bg-black"></span>
              </h1>
              <div className="ml-2">
                <p className="text-xl md:text-2xl text-start font-semibold">
                  Web Development
                </p>
                <p className="text-start text-gray-600 mt-2">
                  Far far away, behind the word mountains
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-start">
              <h1 className="text-5xl md:text-6xl font-bold text-red-500 mt-3 leading-9 relative">
                03
                <span className="absolute left-0 bottom-[-20px] w-full h-[1px] bg-black"></span>
              </h1>
              <div className="ml-2">
                <p className="text-xl md:text-2xl text-start font-semibold">
                  Mobile Apps
                </p>
                <p className="text-start text-gray-600 mt-2">
                  Far far away, behind the word mountains
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
