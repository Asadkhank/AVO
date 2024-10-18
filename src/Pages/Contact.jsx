import React, { useState } from 'react';
import ContactBG from '../assets/Hbg1.jpg';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, subject, message });
  };

  return (
    <>
      {/* Contact Header Section */}
<div
  className="relative h-screen flex items-center lg:items-center lg:justify-start text-start bg-cover bg-center overflow-hidden" // Ensure relative positioning and overflow hidden
  style={{
    backgroundImage: `url(${ContactBG})`,
  }}
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
          CONTACT <span className="text-red-500">&gt;</span>
        </p>
      </div>
    </div>

    <div className="mt-8 lg:mt-10">
      <h1 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold">
        CONTACT
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


      {/* Contact Us Section */}
      <div className='mx-8 sm:mx-32 text-center mt-28 mb-8'>
        <p className='text-[red] tracking-widest text-xs md:text-sm lg:text-base'>CONTACT US</p>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-serif pt-7'>HAVE A PROJECT?</h1>
        <p className='pt-4 text-sm md:text-base lg:text-lg'>
          Far far away, behind the word mountains, far from the countries Vokalia and 
          <br /> Consonantia
        </p>
      </div>

      {/* Contact Form */}
      <section className='lg:mx-32 mx-2  sm:mx-32'>
        <div className="flex flex-col lg:flex-row">
          {/* Left Form Section */}
          <div className="flex-1 bg-gray-100 p-6 lg:p-8 shadow-md rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-2 rounded-md w-full text-sm md:text-base"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border p-2 rounded-md w-full text-sm md:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border p-2 mt-4 rounded-md w-full text-sm md:text-base"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className="border p-2 mt-4 rounded-md w-full h-32 text-sm md:text-base"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info Section */}
          <div className="flex-1 lg:ml-8 mt-8 lg:mt-0 text-gray-600">
            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.1 2 5 5.1 5 9C5 16.5 12 22 12 22C12 22 19 16.5 19 9C19 5.1 15.9 2 12 2ZM12 11C10.3 11 9 9.7 9 8C9 6.3 10.3 5 12 5C13.7 5 15 6.3 15 8C15 9.7 13.7 11 12 11Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm lg:text-base">Address:</p>
                  <p className="font-medium text-xs md:text-sm lg:text-base">198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79C9.06 13.23 10.77 14.94 13.21 17.38C13.61 17.78 14.25 17.87 14.74 17.55C15.89 16.83 17.11 15.96 18.07 15.14C18.64 14.65 18.7 13.82 18.21 13.32L15.08 10.19C14.84 9.95 14.5 9.87 14.18 10.01L12.6 10.69C12.32 10.82 11.98 10.8 11.71 10.64C10.64 10.04 9.53 9.25 8.57 8.29C7.61 7.33 6.81 6.21 6.21 5.14C6.05 4.87 6.03 4.53 6.16 4.25L6.85 2.68C6.98 2.36 6.9 2.02 6.66 1.79L3.53 0.21C3.03 -0.29 2.2 -0.23 1.71 0.34C0.89 1.3 0.02 2.52 -0.7 3.66C-1.02 4.15 -0.92 4.79 -0.52 5.19C2.15 7.86 4.63 10.34 7.31 13.01C9.99 15.69 12.46 18.16 15.13 20.84C15.53 21.23 16.18 21.13 16.67 20.83C17.81 20.1 19.03 19.24 19.93 18.47C20.61 17.97 20.7 16.95 20.21 16.21C17.77 12.92 14.68 9.82 11.39 7.39L6.62 10.79Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm lg:text-base">Phone:</p>
                  <p className="font-medium text-xs md:text-sm lg:text-base">+ 1235 2355 98</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 2.5H3C2.17 2.5 1.5 3.17 1.5 4V20C1.5 20.83 2.17 21.5 3 21.5H21C21.83 21.5 22.5 20.83 22.5 20V4C22.5 3.17 21.83 2.5 21 2.5ZM20 6L12 11L4 6V4L12 9L20 4V6Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm lg:text-base">Email:</p>
                  <p className="font-medium text-xs md:text-sm lg:text-base">info@yoursite.com</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium text-xs md:text-sm lg:text-base">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
