import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-white text-indigo text-2xl text-center p-20">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>It seems you are tying to access a url that does not exist.</p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
