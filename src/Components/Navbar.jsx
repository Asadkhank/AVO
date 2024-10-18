import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const [textColor, setTextColor] = useState('text-white');

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev); // Toggle menu
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setNavbarBg('bg-white');
      setTextColor('text-black');
    } else {
      setNavbarBg('bg-transparent');
      setTextColor('text-white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <section className="ml-32">
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all duration-300 ${navbarBg}`}>
        <div className={`font-bold text-xl md:text-2xl lg:text-3xl lg:ml-28 mr-4 ${textColor}`}>
          <Link to="/">AVO</Link>
        </div>

        <div className={`hidden lg:flex space-x-8 mx-28 ${textColor}`}>
          <Link to="/" className="text-sm md:text-base lg:text-lg hover:text-gray-300">HOME</Link>
          <Link to="/about" className="text-sm md:text-base lg:text-lg hover:text-gray-300">ABOUT</Link>
          <Link to="/work" className="text-sm md:text-base lg:text-lg hover:text-gray-300">WORK</Link>
          <Link to="/blog" className="text-sm md:text-base lg:text-lg hover:text-gray-300">BLOG</Link>
          <Link to="/contact" className="text-sm md:text-base lg:text-lg hover:text-gray-300">CONTACT</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className={`mr-4 sm:mr-8 md:mr-12 lg:hidden ${textColor}`}>
          <button onClick={handleMenuToggle} className="focus:outline-none">
            <div className="space-y-2">
              <span className="block w-6 h-1 bg-current"></span>
              <span className="block w-6 h-1 bg-current"></span>
              <span className="block w-6 h-1 bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center text-center items-center text-black">
          <button
            onClick={handleCloseMenu}
            className="absolute top-10 right-10 text-3xl font-bold hover:text-gray-400"
          >
            &times;
          </button>

          <ul className="space-y-8 text-2xl sm:text-3xl font-bold">
            <li>
              <Link to="/" onClick={handleCloseMenu} className="hover:text-gray-300">HOME</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleCloseMenu} className="hover:text-gray-300">ABOUT</Link>
            </li>
            <li>
              <Link to="/work" onClick={handleCloseMenu} className="hover:text-gray-300">WORK</Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleCloseMenu} className="hover:text-gray-300">BLOG</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleCloseMenu} className="hover:text-gray-300">CONTACT</Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
