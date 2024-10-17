import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-transparent'); // Initially transparent
  const [textColor, setTextColor] = useState('text-white'); // Text color changes with navbar

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setNavbarBg('bg-white'); // Set background to white after scrolling down
      setTextColor('text-black'); // Change text color to black
    } else {
      setNavbarBg('bg-transparent'); // Keep it transparent when at the top
      setTextColor('text-white'); // Change text color to white when at the top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <>
      <section className='ml-32'>
        {/* Navbar with AVO logo and menu */}
        <nav
          className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all duration-300 ${navbarBg}`}
          style={{ zIndex: 100 }}
        >
          <div className={`font-bold text-3xl lg:ml-28 mr-4 ${textColor}`}>
            <Link to="/">AvO</Link>
          </div>

          {/* Links (visible on lg and above) */}
          <div className={`hidden lg:flex space-x-8 mx-28 ${textColor}`}>
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/work" className="hover:text-gray-300">Work</Link>
            <Link to="/blog" className="hover:text-gray-300">Blog</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* Hamburger Icon (visible only on small and medium screens) */}
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

        {/* Full-screen overlay menu for small screens */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center text-center items-center text-black">
            {/* Close button */}
            <button
              onClick={handleCloseMenu}
              className="absolute top-10 right-10 text-3xl font-bold hover:text-gray-400"
            >
              &times;
            </button>

            <ul className="space-y-8 text-4xl font-bold">
              <li>
                <Link to="/" onClick={handleCloseMenu} className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleCloseMenu} className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={handleCloseMenu} className="hover:text-gray-300">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={handleCloseMenu} className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleCloseMenu} className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default Navbar;
