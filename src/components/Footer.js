import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="absolute bottom-0 flex flex-col space-y-4 pb-6">
      <div className="flex justify-center flex-wrap text-xs text-gray-400 space-x-4 px-10">
        <Link>About</Link>
        <Link>Blog</Link>
        <Link>Jobs</Link>
        <Link>Help</Link>
        <Link>API</Link>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>Top Accounts</Link>
        <Link>Hashtags</Link>
        <Link>Locations</Link>
      </div>
      <div className="flex justify-center text-xs text-gray-400">
        © 2021 Postagram from Jayastronomic
      </div>
    </div>
  );
};

export default Footer;