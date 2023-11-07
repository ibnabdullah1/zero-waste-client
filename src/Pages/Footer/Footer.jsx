import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
const Footer = () => {
  return (
    <div>
      <footer className="relative bg-[rgb(0,0,0,0.03)] pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <div>
                <img
                  className="w-[100px] h-auto"
                  src="https://i.ibb.co/P9crMqr/Zero-Waste-logo.png"
                  alt=""
                />
              </div>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Support initiatives that combat food waste and hunger in your
                community.
              </h5>
              <div className="flex gap-2 my-4">
                <button
                  className="bg-white text-blue-500 p-3 shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-"
                  type="button"
                >
                  <FaFacebookF />
                </button>
                <button
                  className="bg-white p-3 text-blue-400 shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  type="button"
                >
                  <GrTwitter />
                </button>

                <button
                  className="bg-white text-red-600 p-3 shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  type="button"
                >
                  <BsYoutube />
                </button>
                <button
                  className="bg-white text-blue-400 p-3 shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none "
                  type="button"
                >
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023 </span>
                <a
                  href=""
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Zero Waste
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
