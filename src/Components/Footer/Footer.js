import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto flex justify-center items-center gap-4">
        <Link
          to="https://www.facebook.com/aburaihan019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon text-white text-xl" />
        </Link>
        <Link
          to="https://github.com/AbuRaihan1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon text-white text-xl" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/aburaihan019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon text-white text-xl" />
        </Link>
        <Link
          to="https://www.instagram.com/aburaihan019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon text-white text-xl" />
        </Link>
      </div>
      <p className="text-center text-white mt-4">
      &copy; All rights reserved by Abu Raihan
      </p>
    </footer>
  );
};

export default Footer;
