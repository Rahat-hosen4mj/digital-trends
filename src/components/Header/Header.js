import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mt-3">
      <ul className="flex justify-center">
        <li className="mr-4">
          <Link to="/home">Home</Link>
        </li>
        <li className="mr-4">
          <Link to="/review">Review</Link>
        </li>
        <li className="mr-4">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="mr-4">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="mr-4">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
