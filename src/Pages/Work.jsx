import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WorkBG from '../assets/Hbg1.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


import Cassete from '../assets/Cassette.jpeg';
import Menimg from '../assets/imagesmen.jpeg';
import Blogs from '../Components/Blogs';

const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    return (
       <>
       
       <div 
          className="h-screen flex items-center justify-start text-start bg-cover bg-center"
          style={{
            backgroundImage: `url(${WorkBG})`,
          }}
        >
          <h1 className="text-6xl font-bold ml-32 mt-24 text-white">
           Work
          </h1>

          {/* Transparent Button to Navigate to Home */}
          <Link to="/" className="absolute justify-start ml-24 left-5 bg-transparent  text-white px-4 py-2 rounded hover:text-[red] transition duration-300">
            Home <span className='text-red-500'>&gt;</span>
          </Link>
          <p className='-ml-16 text-white'> Work <span className='text-red-500'>&gt;</span> </p>

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
        <section className=" mt-28 relative">
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
        <h1 className="lg:text-7xl font-bold pb-5 text-5xl   text-center">Our Works</h1>

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
            <div className={`w-full md:w-1/2 flex flex-col mt-7  justify-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} md:ml-14`}>
              <h2 className="text-lg text-start tracking-widest font-semibold">
                {index % 2 === 0 ? 'Web Design' : 'Web Development'}
              </h2>
              <h1 className="text-3xl tracking-widest mt-2">
                {index % 2 === 0 ? 'Cassette tape' : 'Hand Writing'}
              </h1>
              <p className="text-lg mt-2">
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
                  <h2 className="text-lg font-semibold">Jamie Jonson</h2>
                  <p className="text-gray-500 tracking-widest">avo.com</p>
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
      )
    }

export default Work
