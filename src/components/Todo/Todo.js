import React from "react";
import TodoShop from "../../assets/todo/Todo-Shop.png";
import TodoInvest from "../../assets/todo/Todo-Invest.png";
import TodoRelax from "../../assets/todo/Todo-Relax.png";
import TodoFun from "../../assets/todo/Todo-Fun.png";



export const Todo = () => {
  return (
    <>
      <>
        <div id="our chef" className="max-w-screen-xl mx-auto my-12 px-6">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
              What to do in Bulacan
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <h5 className="poppins text-gray-500 pb-4 text-center">
            Your Unforgettable Journey Begins Here!
          </h5>

          <div className="py-10 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
              <div className="sm:w-6/12 order-last sm:order-first">
                <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
                  <li className="bg-gray-100 p-5 py-10 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="mb-3 rounded-full mx-auto h-24 w-24"
                          src={TodoShop}
                          alt="dev1"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                          
                            Shop
                          
                        </h4>
                        <p className="text-sm leading-6 text-gray-500 uppercase">
                          Tatak Bulakenyo Products
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="bg-gray-100 p-5 py-10 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="mb-3 rounded-full mx-auto h-24 w-24"
                          src={TodoInvest}
                          alt="dev2"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                          
                            Invest
                          
                        </h4>
                        <p className="text-sm leading-6 text-gray-500 uppercase">
                          Business Friendly
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="bg-gray-100 p-5 py-10 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="mb-3 rounded-full mx-auto h-24 w-24"
                          src={TodoRelax}
                          alt="dev3"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                          
                            Relax
                          
                        </h4>
                        <p className="text-sm leading-6 text-gray-500 uppercase">
                          Experience Hospitality
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="bg-gray-100 p-5 py-10 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="mb-3 rounded-full mx-auto h-24 w-24"
                          src={TodoFun}
                          alt="dev4"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                          
                            Have Fun
                          
                        </h4>
                        <p className="text-sm leading-6 text-gray-500 uppercase">
                          Discover Fun in Bulacan
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
                <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
                  Welcome to the Province of
                </p>
                <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                  Bulacan, Philippines
                </h3>
                <p class="mt-4 text-md leading-7 text-gray-500 font-light">
                  At the heart of Fareast Asia lies Bulacan—a province in the
                  Republic of the Philippines, situated in the country's Central
                  Luzon Region, north of Manila, the nation's capital. Bulacan
                  prides itself for its rich historical heritage. In 1899, the
                  historic Barasoain Church in Malolos City (Bulacan's capital
                  city) is the birthplace of the First Constitutional Democracy
                  in Asia.
                  <br />
                  <br />
                  We invite you to please come and visit us. Experience only the Best. Experience Bulacan.
                  <br />
                  <br />- Bulakeño -
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
