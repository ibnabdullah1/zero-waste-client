import "./Banner.css";
const Banner = () => {
  return (
    <div className="bg-slate-50 py-20 px-10 lg:px-16">
      <div className="md:flex justify-between items-center ">
        <div className="mb-4">
          <h1 className="font-bold text-4xl mt-3  text-[#0CB14B] md:text-6xl ">
            FIND FOOD IN <br /> <span className="text-zinc-600">YOUR AREA</span>
          </h1>

          <p className=" text-gray-700 mt-3  lg:w-[450px]">
            Emergency food and cooked meals are available through our network of
            Partner Agency programs and sites.
          </p>

          <button className="px-8 py-2 mt-3 text-sm font-medium text-white bg-[#0CB14B] border border-[#0CB14B] rounded active:text-[#0CB14B] hover:bg-transparent hover:text-[#0CB14B] focus:outline-none">
            Get Help
          </button>
        </div>
        <div className=" ">
          <img
            className="w-[400px] img-shadow rounded-[50%] "
            src="https://i.ibb.co/4WfhvkV/food-13549.png"
            //   src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
            alt="food illustration"
            loading="lazy"
            width="4500"
            height="4500"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
