import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">BrandLogo</div>
        <nav className="space-x-8">
          <Link to="/" className="text-white text-lg hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-white text-lg hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
