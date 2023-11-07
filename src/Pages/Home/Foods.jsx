import { useEffect, useState } from "react";
import FoodsCard from "./FoodsCard";
import { Link } from "react-router-dom";

const Foods = () => {
  const [Foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/highestQuantity")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  return (
    <div className="py-20">
      {/* <h2 className="text-4xl font-bold mt-8 mb-14 text-center"> */}
      <h2 className="text-2xl  md:text-4xl  mt-8 mb-14  pl-3 w-[350px] mx-auto border-l-4  font-sans font-bold border-[#ffc933] dark:border-[#ffc933]   dark:text-gray-200">
        Top Quantity Foods
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-10">
        {Foods.length > 0 &&
          Foods.slice(0, 6).map((Food) => (
            <FoodsCard key={Food._id} Food={Food} />
          ))}
      </div>
      {Foods.length > 0 && (
        <div className="text-center mt-10">
          <Link to="/availableFoods">
            <button className="bg-[#ffc933] px-7 py-3 rounded-lg text-xl font-semibold text-white">
              See all
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Foods;
