import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Favorite = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-white text-indigo text-2xl text-center p-20">
        There are no books in your favourits list.
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
