const Blogs = () => {
  return (
    <div
      id="blogs"
      className="flex bg-[rgb(0,0,0,0.03)] justify-center dark:bg-zinc-800 items-center"
    >
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h2 className="text-2xl  md:text-3xl  pl-3 w-[190px] mx-auto border-l-4  font-sans mb-4 font-bold border-[#ffc933] dark:border-[#ffc933]   dark:text-gray-200">
            Latest Blogs
          </h2>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative">
                <div class="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    19 June 2023
                  </p>
                  <div className="absolute bottom-0 left-0 p-3">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Delicious Homemade..
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Learn how to make mouthwatering ...
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/Z1HVmvm/blog1.png"
                  className="w-full"
                  alt="chair"
                />
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div class="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                <div>
                  <p className="p-4 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    05 Nov 2023
                  </p>
                  <div className="absolute bottom-0 left-0 p-3">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Top 10 BBQ Recipes....
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Fire up the grill and try out these amazing BBQ recipes..
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/mhN2s5g/download.jpg"
                  className="w-full"
                  alt="wall design"
                />
              </div>
            </div>
            <div className="relative">
              <div class="absolute inset-0 bg-black opacity-40 rounded-md"></div>
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2023
                </p>
                <div className="absolute bottom-0 left-0 md:p-7 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    Exploring Authentic Thai Cuisine
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Take a culinary journey to Thailand with our guide to
                    authentic Thai dishes, including Tom Yum soup, Pad Thai, and
                    Green Curry.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://i.ibb.co/KVDpxQk/Cub-Scout-Food-Drive-2012-1.jpg"
                alt="sitting place"
                className="w-full mt-8 md:mt-6 hidden sm:block"
              />
              <img
                className="w-full mt-4 sm:hidden"
                src="https://i.ibb.co/KVDpxQk/Cub-Scout-Food-Drive-2012-1.jpg"
                alt="sitting place"
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <div class="absolute inset-0 bg-black opacity-40 rounded-md"></div>
              <div>
                <p className="md:p-7 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  27 April 2023
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    Farm-to-Table Dining: A Sustainable Experience
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Discover the joys of farm-to-table dining and how it
                    benefits both your taste buds and the environment.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://i.ibb.co/875c8Tk/Getty-Images-1215578016-645x645.jpg"
                alt="sitting place"
                className="w-full  sm:block hidden"
              />
              <img
                className="w-full sm:hidden"
                src="https://i.ibb.co/dj9J8qW/IMG-8266-e1586365700614.jpg"
                alt="sitting place"
              />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <div class="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-3">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Art of Sushi Making
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Learn the art of sushi making with our sushi chef's tips
                      and tricks.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/PTN7LMK/maxresdefault-1.jpg"
                  className="w-full"
                  alt="chair"
                />
              </div>
              <div className="relative w-full  sm:mt-0 mt-4">
                <div class="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 Sep 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-3">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Art of Baking...
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Master the art of creating flaky and buttery croissants
                      with our step-by-step baking guide.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/n6bztwk/Volunteers-3-scaled.jpg"
                  className="w-full"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
