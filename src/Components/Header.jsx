import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-200 via-blue-500 to-purple-500 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/public/images/somalia.png" alt="" className="w-20 h-12" />
        </Link>
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
