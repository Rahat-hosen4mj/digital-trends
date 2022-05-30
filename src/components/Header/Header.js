import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mt-3">
      <ul className="flex justify-end text-base   py-3 text-blue-600 font-medium mr-20 pr-20">
        <li className="mr-5  hover:text-orange-400">
          <Link to="/home">Home</Link>
          <hr className="bg-blue-500 mt-1 h-0.5" />
        </li>
        <li className="mr-5 pl-3 hover:text-orange-400">
          <Link to="/review">Review</Link>
          <hr className="bg-blue-500 mt-1 h-0.5" />
        </li>
        <li className="mr-5 hover:text-orange-400  pl-3">
          <Link to="/dashboard">Dashboard</Link>
          <hr className="bg-blue-500 mt-1 h-0.5" />
        </li>
        <li className="mr-5 hover:text-orange-400  pl-3">
          <Link to="/blogs">Blogs</Link>
          <hr className="bg-blue-500 mt-1 h-0.5" />
        </li>
        <li className="mr-5 hover:text-orange-400  pl-3">
          <Link to="/about">About</Link>
          <hr className="bg-blue-500 mt-1 h-0.5" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
