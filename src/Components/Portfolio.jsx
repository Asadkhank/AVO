import React from "react";
import { Link } from "react-router-dom";

import Cassete from '../assets/Cassette.jpeg';
import Menimg from '../assets/imagesmen.jpeg';

const Portfolio = () => {
  return (
    <section className="bg-slate-300 mt-28 relative">
      <svg
        className="absolute top-0 left-0 w-full transform rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
        />
      </svg>

      <div className="mx-auto py-16 px-4 md:px-32">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold pb-5 text-center">Our Works</h1>

        {/* Section Loop for DRY Principle */}
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div key={index} className={`w-full flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} mt-10`}>
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Cassete}
                alt="Cassette"
                className="mt-6 max-w-full h-auto md:h-64 lg:h-80" // Increased height for larger images
              />
            </div>

            {/* Text Section */}
            <div className={`w-full md:w-1/2 flex flex-col mt-7 justify-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} md:ml-14`}>
              <h2 className="text-lg md:text-xl tracking-widest font-semibold">
                {index % 2 === 0 ? 'Web Design' : 'Web Development'}
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-widest mt-2">
                {index % 2 === 0 ? 'Cassette tape' : 'Hand Writing'}
              </h1>
              <p className="text-base md:text-lg lg:text-xl mt-2">
                Far far away, behind the word mountains, far from the countries
                <br />
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="flex items-center mt-5">
                <div className="mr-4">
                  <img
                    src={Menimg}
                    alt="Profile"
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Jamie Jonson</h2>
                  <p className="text-gray-500 tracking-widest text-sm md:text-base lg:text-lg">avo.com</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/" // Link to the Home page
                  className="block w-full border border-blue-500 bg-transparent text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer text-center"
                  style={{ letterSpacing: "0.2em" }}
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Waveform at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
        />
      </svg>
    </section>
  );
};

export default Portfolio;
