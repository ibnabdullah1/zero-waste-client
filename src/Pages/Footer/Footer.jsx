import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
const Footer = () => {
  return (
    <div>
      <footer className="relative bg-gray-200 pt-8 pb-6">
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
