import { useEffect, useState } from "react";
import AvailableFoodCard from "./availableFoodCard";
import axios from "axios";

const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [noData, setNoData] = useState("No data available");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setAvailableFoods(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setNoData();
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`http://localhost:5000/searchFood/${e.target.name.value}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data) {
          setAvailableFoods(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const handleSortChange = (e) => {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);

    const sortedData = [...availableFoods];
    if (selectedSortOrder === "-1") {
      sortedData.sort(
        (a, b) => new Date(b.Expired_Date) - new Date(a.Expired_Date)
      );
    } else if (selectedSortOrder === "1") {
      sortedData.sort(
        (a, b) => new Date(a.Expired_Date) - new Date(b.Expired_Date)
      );
    }

    setAvailableFoods(sortedData);
  };

  return (
    <div>
      <h1 className="text-xl text-center lg:my-10 my-5 lg:text-4xl  font-semibold">
        Available Foods
      </h1>

      <div className="search lg:my-10 md:flex px-4 md:px-0 justify-center my-5 mx-auto w-[100%] lg:w-[80%] md:w-[90%]">
        <form
          className="lg:w-[70%] md:w-[60%]  w-[80%]"
          onSubmit={handleSearch}
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              name="name"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#ffc933] focus:border-[#ffc933] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ffc933] dark:focus:border-[#ffc933]"
              placeholder="Search by food name"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5  font-medium rounded text-sm px-4 py-2 bg-[#ffc933] hover:bg-[#ffc933] focus:ring-[#ffc933]"
            >
              Search
            </button>
          </div>
        </form>
        <div className="md:ml-3  md:mt-0 mt-3 lg:w-[10%] md:w-[10%] w-[20%] ">
          <select
            id="countries"
            className="py-4 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#ffc933]  focus:border-[#ffc933]"
            onChange={handleSortChange}
          >
            <option value="">Sort</option>
            <option value="-1">Late Expire date</option>
            <option value="1">Low Expire date</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="min-h-[60vh] flex justify-center">
          <div>
            <img
              className="w-20 h-20 animate-spin"
              src="https://www.svgrepo.com/show/448500/loading.svg"
              alt="Loading icon"
            />
          </div>
        </div>
      ) : availableFoods.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-10">
          {availableFoods.map((availableFood) => (
            <AvailableFoodCard
              key={availableFood._id}
              availableFood={availableFood}
            />
          ))}
        </div>
      ) : (
        <div className="min-h-[60vh] py-10 flex justify-center">
          <h2>
            {noData && (
              <div>
                <img
                  className="w-[300px]"
                  src="https://www.carboncompassenterprises.com/assets/cmswebsite/images/no-items-found.svg"
                  alt=""
                />
                <h3 className="text-center">No customers found</h3>
                <p className="text-center">
                  Try changing the filters or search term
                </p>
              </div>
            )}
          </h2>
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
