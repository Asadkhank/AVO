import React from 'react';
import HomeBG from "../assets/Hbg1.jpg";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AboutBG from '../assets/Hbg1.jpg';
import AboutUsSection from '../Components/AboutUsSection';
import MenImg from '../assets/imagesmen.jpeg';
import { FaTwitter, FaInstagram, FaGoogle, FaFacebook } from 'react-icons/fa'
import Testimonial from '../Components/Testimonial';


const About = () => {
    return (
      <>

<div 
  className="h-screen flex items-center justify-center  lg:items-center lg:justify-start text-start bg-cover bg-center"
  style={{
    backgroundImage: `url(${AboutBG})`,
  }}
>
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ml-6 md:ml-16 lg:ml-32 mt-12 md:mt-20 lg:mt-24 text-white">
    About Us 
  </h1>

  {/* Transparent Button to Navigate to Home */}
  <Link 
    to="/" 
    className="absolute ml-6 md:ml-16 lg:ml-24 left-5 bg-transparent text-white px-3 py-1 md:px-4 md:py-2 rounded hover:text-[red] transition duration-300"
  >
    Home <span className='text-red-500'>&gt;</span>
  </Link>

  <p className="mt-4 md:mt-6 text-white lg:-ml-20 text-sm md:text-base lg:text-lg">
    About Us <span className="text-red-500">&gt;</span>
  </p>

  {/* SVG at the Bottom for Styling the Four Edges */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg
      className="w-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="white"
        d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
      />
    </svg>
  </div>
</div>

<AboutUsSection/>

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

      <section className='mt-36 bg-slate-300 relative '>

 {/* 1. Rotated SVG applied at the top */}
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

  {/* Expert Team Section */}
  <div className='lg:ml-32 lg:mr-32 py-40 mt-10'>
    <div><h1 className='text-center lg:text-5xl font-serif pb-12 '>EXPERT TEAM</h1></div>

    {/* First Row */}
    <div className='w-full flex lg:flex-row  flex-col items-center lg:justify-start  gap-x-4'>
  {/* Content Here */}


      <div className='relative group'>
        <img src={MenImg} alt="" className='transition-transform w-[300px] duration-500 ease-in-out group-hover:scale-105' />
        {/* Social Media Icons */}
        <div className="absolute top-2 left-2 flex flex-col items-start space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-500 text-sm hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-pink-500 text-sm hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-red-500 text-sm hover:text-red-600"><FaGoogle /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-700 text-sm hover:text-blue-800"><FaFacebook /></a>
        </div>
        <h2 className='text-2xl font-semibold font-serif pt-2 group-hover:text-red-500'>John <br /> Wilson</h2>
        <p className='text-[red]'>Web Designer</p>
      </div>

      <div className='relative group'>
        <img src={MenImg} alt="" className='transition-transform duration-500 ease-in-out group-hover:scale-105' />
        {/* Social Media Icons */}
        <div className="absolute top-2 left-2 flex flex-col items-start space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-500 text-sm hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-pink-500 text-sm hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-red-500 text-sm hover:text-red-600"><FaGoogle /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-700 text-sm hover:text-blue-800"><FaFacebook /></a>
        </div>
        <h2 className='text-2xl font-semibold font-serif pt-2 group-hover:text-red-500'>John <br /> Wilson</h2>
        <p className='text-[red]'>Web Designer</p>
      </div>

      <div className='relative group'>
        <img src={MenImg} alt="" className='transition-transform duration-500 ease-in-out group-hover:scale-105' />
        {/* Social Media Icons */}
        <div className="absolute top-2 left-2 flex flex-col items-start space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-500 text-sm hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-pink-500 text-sm hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-red-500 text-sm hover:text-red-600"><FaGoogle /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-700 text-sm hover:text-blue-800"><FaFacebook /></a>
        </div>
        <h2 className='text-2xl font-semibold font-serif pt-2 group-hover:text-red-500'>John <br /> Wilson</h2>
        <p className='text-[red]'>Web Designer</p>
      </div>

      <div className='relative group'>
        <img src={MenImg} alt="" className='transition-transform duration-500 ease-in-out group-hover:scale-105' />
        {/* Social Media Icons */}
        <div className="absolute top-2 left-2 flex flex-col items-start space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-500 text-sm hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-pink-500 text-sm hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-red-500 text-sm hover:text-red-600"><FaGoogle /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-700 text-sm hover:text-blue-800"><FaFacebook /></a>
        </div>
        <h2 className='text-2xl font-semibold font-serif pt-2 group-hover:text-red-500'>John <br /> Wilson</h2>
        <p className='text-[red]'>Web Designer</p>
      </div>
    </div>

    {/* Second Row */}
    
    <div className='w-full flex lg:flex-row -ml-7 flex-col justify-start lg:ml-32 gap-x-4'>
      <div className='relative group'>
        <img src={MenImg} alt="" className='transition-transform duration-500 ease-in-out group-hover:scale-105' />
        {/* Social Media Icons */}
        <div className="absolute top-2 left-2 flex flex-col items-start space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-500 text-sm hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-pink-500 text-sm hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-red-500 text-sm hover:text-red-600"><FaGoogle /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-700 text-sm hover:text-blue-800"><FaFacebook /></a>
        </div>
        <h2 className='text-2xl font-semibold font-serif pt-2 group-hover:text-red-500'>John <br /> Wilson</h2>
        <p className='text-[red]'>Web Designer</p>
      </div>

      <div className='relative group'>
        <img src={MenImg} alt="" className='transition-transform duration-500 ease-in-out group-hover:scale-105' />
        {/* Social Media Icons */}
        <div className="absolute top-2 left-2 flex flex-col items-start space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-500 text-sm hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-pink-500 text-sm hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-red-500 text-sm hover:text-red-600"><FaGoogle /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-700 text-sm hover:text-blue-800"><FaFacebook /></a>
        </div>
        <h2 className='text-2xl font-semibold font-serif pt-2 group-hover:text-red-500'>John <br /> Wilson</h2>
        <p className='text-[red]'>Web Designer</p>
      </div>

      <div className='relative group'>
        <img src={MenImg} alt="" className='transition-transform duration-500 ease-in-out group-hover:scale-105' />
        {/* Social Media Icons */}
        <div className="absolute top-2 left-2 flex flex-col items-start space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-500 text-sm hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-pink-500 text-sm hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-red-500 text-sm hover:text-red-600"><FaGoogle /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-700 text-sm hover:text-blue-800"><FaFacebook /></a>
        </div>
        <h2 className='text-2xl font-semibold font-serif pt-2 group-hover:text-red-500'>John <br /> Wilson</h2>
        <p className='text-[red]'>Web Designer</p>
      </div>

      <div className='relative group'>
        <img src={MenImg} alt="" className='transition-transform duration-500 ease-in-out group-hover:scale-105' />
        {/* Social Media Icons */}
        <div className="absolute top-2 left-2 flex flex-col items-start space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-500 text-sm hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-pink-500 text-sm hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-red-500 text-sm hover:text-red-600"><FaGoogle /></a>
          <a href="#" className="bg-white rounded-full p-1 shadow-md text-blue-700 text-sm hover:text-blue-800"><FaFacebook /></a>
        </div>
        <h2 className='text-2xl font-semibold font-serif pt-2 group-hover:text-red-500'>John <br /> Wilson</h2>
        <p className='text-[red]'>Web Designer</p>
      </div>
    </div>
  </div>
   {/* SVG at the Bottom for Styling the Four Edges */}
   <svg
    className="absolute  bottom-0 left-0 w-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      d="M0,200 L360,250 L1080,340 L720,360 L1440,200 L1440,320 L0,320 Z"
    />
  </svg>
</section>

<Testimonial/>
        </>
    );
}

export default About;
