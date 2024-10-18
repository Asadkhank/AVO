import React from 'react';
import image from '../assets/keyboard.jpeg';
import { Link } from 'react-router-dom';

const Blogs = ({ cardCount = 8, showSvg = true }) => {
  return (
    <section style={{ backgroundColor: 'transparent' }} className="relative mt-24">
      {showSvg && (
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
      )}

      <section className="pt-28 pb-28 relative">
        <div className="container mx-auto px-8 md:px-32">
          <h2 className="text-center lg:text-6xl md:text-4xl text-3xl font-bold mb-16">Recent Blogs</h2> {/* Increased font size */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(cardCount)].map((_, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-6"> {/* Increased padding */}
                <Link to={`/blog/${idx}`} className="text-black hover:text-red-500 cursor-pointer">
                  <h3 className="font-bold text-xl text-center">Amplify your blockchain team</h3> {/* Increased font size */}
                </Link>
                <Link to={`/blog/${idx}`}>
                  <img
                    src={image}
                    alt="Blog post"
                    className="w-full rounded-lg mt-4 h-48 object-cover hover:opacity-75 transition duration-300"
                  />
                </Link>
                <div className="flex justify-center tracking-widest pt-4 space-x-4 text-base text-gray-500 mt-3 items-center"> {/* Increased spacing */}
                  <span>June 01, 2020</span>
                  <span>Admin</span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.315 0 4.471-.667 6.303-1.813L24 24l-1.781-5.698A11.925 11.925 0 0024 12c0-6.627-5.373-12-12-12zm0 21.818C6.044 21.818 1.182 16.956 1.182 12S6.044 2.182 12 2.182 22.818 6.044 22.818 12c0 2.737-.951 5.25-2.518 7.198L21 22l-3.174-1.026A9.788 9.788 0 0012 21.818zm0-3.636c-1.632 0-3.182-.421-4.545-1.197l-.908-.454L7.09 17l1.191.599c1.091.546 2.318.818 3.727.818 3.318 0 6-2.682 6-6 0-3.318-2.682-6-6-6s-6 2.682-6 6c0 .818.137 1.64.41 2.391l.241.776-.966-.484A8.964 8.964 0 011.182 12c0-4.682 3.682-8.455 8.455-8.455 4.773 0 8.455 3.773 8.455 8.455S16.773 20.455 12 20.455z" />
                    </svg>
                    {idx + 3}
                  </span>
                </div>
                <p className="w-full mx-auto text-gray-700 mt-4 text-center text-base"> {/* Adjusted font size and margin */}
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showSvg && (
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000000"
            d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
          />
        </svg>
      )}
    </section>
  );
};

export default Blogs;
