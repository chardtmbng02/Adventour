import React from "react";
import CoverHero from "../../assets/index/Barasoain-Church.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CoverHero}
            alt="CoverHero"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="md:text-5xl text-4xl font-bold leading-tight mb-4">
            Unveil the Wonders of Bulacan
          </h1>
          <p className="text-lg text-gray-300 mb-8 mx-6">
            Where Historical Marvels, Scenic Landscapes, and Exciting Escapades
            Collide.
          </p>
          <Link to="/tourism"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </>
  );
};
