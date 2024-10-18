import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WorkBG from '../assets/Hbg1.jpg';
import Cassete from '../assets/Cassette.jpeg';
import Menimg from '../assets/imagesmen.jpeg';

const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
  className="relative h-screen flex items-center lg:items-center lg:justify-start text-start bg-cover bg-center overflow-hidden" // Ensure relative positioning and overflow hidden
  style={{ backgroundImage: `url(${WorkBG})` }}
>
  <div className="text-white lg:ml-32 flex-col ml-7">
    <div className="flex items-center">
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
          WORK <span className="text-red-500">&gt;</span>
        </p>
      </div>
    </div>

    <div className="mt-8 lg:mt-10">
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
        WORK
      </h1>
    </div>
  </div>

  {/* SVG at the Bottom for Styling the Four Edges */}
  <div className="absolute bottom-0 left-0 right-0 z-20 h-1/4"> {/* Higher z-index and set height */}
    <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill="white"
        d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
      />
    </svg>
  </div>
</div>


      <section className="mt-28 relative">
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

        <div className="mx-auto py-16 px-4 md:px-16 lg:px-32">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold pb-5 text-center">
            Our Works
          </h1>

          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className={`w-full flex flex-col md:flex-row ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              } mt-10`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={Cassete}
                  alt="Cassette"
                  className="mt-6 max-w-full h-auto md:h-64 lg:h-80"
                />
              </div>

              <div
                className={`w-full md:w-1/2 flex flex-col mt-7 justify-center ${
                  index % 2 === 0
                    ? 'md:items-start'
                    : 'md:items-end'
                } md:ml-14`}
              >
                <h2 className="text-base md:text-lg lg:text-xl tracking-widest font-semibold">
                  {index % 2 === 0 ? 'Web Design' : 'Web Development'}
                </h2>
                <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-widest mt-2">
                  {index % 2 === 0 ? 'Cassette tape' : 'Hand Writing'}
                </h1>
                <p className="text-sm md:text-base lg:text-lg mt-2">
                  Far far away, behind the word mountains, far from the countries
                  <br />
                  Vokalia and Consonantia, there live the blind texts.
                </p>

                <div className="flex items-center mt-5">
                  <div className="mr-4">
                    <img
                      src={Menimg}
                      alt="Profile"
                      className="h-16 w-16 md:h-20 md:w-20 rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                      Jamie Jonson
                    </h2>
                    <p className="text-gray-500 tracking-widest">avo.com</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/"
                    className="block w-full border border-blue-500 bg-transparent text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer text-center text-sm md:text-base lg:text-lg"
                    style={{ letterSpacing: '0.2em' }}
                  >
                    VIEW PORTFOLIO
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center justify-center mb-28 gap-2">
        <button
          className="rounded-full bg-gray-200 px-3 py-2 text-gray-500 hover:bg-gray-300"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="text-lg font-bold">&lt;</span>
        </button>
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index + 1}
            className={`rounded-full px-3 py-2 ${
              currentPage === index + 1
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-500 hover:bg-[red]'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="rounded-full bg-gray-200 px-3 py-2 text-[red] hover:bg-gray-300"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === 5}
        >
          <span className="text-lg font-bold">&gt;</span>
        </button>
      </div>
    </>
  );
};

export default Work;
