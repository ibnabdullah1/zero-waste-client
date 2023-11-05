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
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-10">
        {Foods.length > 0 &&
          Foods.slice(0, 6).map((Food) => (
            <FoodsCard key={Food._id} Food={Food} />
          ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/availableFoods">
          <button className="bg-[#ffc933] px-7 py-3 rounded-lg text-xl font-semibold text-white">
            See all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Foods;
