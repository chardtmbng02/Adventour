import React from "react";
import historicaldatas from "../../data/HistoricalData";

export const AttractionBlog = () => {
  return (
    <>
      <div id="our chef" className="max-w-screen-xl mx-auto my-12 px-6">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
            Historical Sites
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-4 text-center">
          Historical Place, Restaurant, and Accomodation you must visit.
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {historicaldatas.map((historicaldata, index) => (
          <div key={index} className="bg-white border border-gray-200 transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <div className="overflow-hidden rounded-2xl flex flex-grow">
              <img
                className="transform transition duration-700 hover:scale-125"
                src={historicaldata.imgurl}
                alt="Barasoain-Church"
              />
            </div>

            <div className="flex mt-6 space-x-3 ">
              <div className="flex flex-col space-y-3">
                <h1 className="text-xl text-gray-800 poppins">
                  {historicaldata.title}
                </h1>
                <p className="text-sm text-gray-500 poppins">
                  {historicaldata.shortdesc}
                </p>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>
    </>
  );
};
