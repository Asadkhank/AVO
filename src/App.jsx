import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail'; // Import BlogDetail
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* Add Navbar here */}
      <Navbar />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
