import React from "react";
import Barasoain from "../../assets/best/Barasoain.png";
import Museum from "../../assets/best/Museum.png";
import Bakas from "../../assets/best/Bakas.png";

export const Best = () => {
  return (
    <>
      <div id="our chef" className="max-w-screen-xl mx-auto my-12 px-6">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
            Recommendations
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-4 text-center">
          Historical Place, Restaurant, and Accomodation you must visit first.
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div className="bg-white border border-gray-200 transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <div className="overflow-hidden rounded-2xl flex flex-grow">
              <img
                className="transform transition duration-700 hover:scale-125"
                src={Barasoain}
                alt="Barasoain-Church"
              />
            </div>

            <div className="flex mt-6 space-x-3 ">
              <div className="flex flex-col space-y-3">
                <h1 className="text-xl text-gray-800 poppins">
                  Barasoain Church
                </h1>
                <h3 className="text-gray-800 poppins font-bold">
                  Historical Site
                </h3>
                <p className="text-sm text-gray-500 poppins">
                  A national shrine, the historic Barasoain Church is the site
                  of the Constitutional Convention of the first Philippine
                  Republic, making the Philippines the very first Asian
                  Government to promulgate a Constitution. It was the Seat of
                  the First Philippine Republic on Sept. 15, 1898 to the last
                  week of Feb.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <div className="overflow-hidden rounded-2xl flex flex-grow">
              <img
                className="transform transition duration-700 hover:scale-125"
                src={Museum}
                alt="Bulacan-Museum"
              />
            </div>

            <div className="flex mt-6 space-x-3 ">
              <div className="flex flex-col space-y-3">
                <h1 className="text-xl text-gray-800 poppins">
                  Bulacan Museum
                </h1>
                <h3 className="text-gray-800 poppins font-bold">
                  Heritage Site
                </h3>
                <p className="text-sm text-gray-500 poppins">
                  The Museo ng Bulacan houses a collection of valuable relics
                  and mementos, articles, documents and handicrafts of the
                  Philippine revolution. Located in Malolos to promote the
                  cultural heritage and tradition of the province. It is under
                  the management of the Provincial Government of Bulacan.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <div className="overflow-hidden rounded-2xl flex flex-grow">
              <img
                className="transform transition duration-700 hover:scale-125"
                src={Bakas}
                alt="Bakas"
              />
            </div>

            <div className="flex mt-6 space-x-3 ">
              <div className="flex flex-col space-y-3">
                <h1 className="text-xl text-gray-800 poppins">Bakas</h1>
                <h3 className="text-gray-800 poppins font-bold">
                  Ecological Site
                </h3>
                <p className="text-sm text-gray-500 poppins">
                  The well-known Bakas is located at Barangay Matictic, Bakas
                  River Rd, Norzagaray. It is a very interesting spot where the
                  foot markings of the legendary Bernardo Carpio and his pets
                  can be found. The place presents a lush green scenery, with
                  fresh air and cool, clean and calm flowing current.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
