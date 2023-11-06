import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const ManageFood = () => {
  const { id } = useParams();
  const [req, setReq] = useState([]);
  const [foodItem, setFoodItem] = useState({});
  useEffect(() => {
    // Fetch the food item by ID when the component mounts
    Axios.get(`http://localhost:5000/managefoods/${id}`)
      .then((response) => {
        setFoodItem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:5000/req")
      .then((res) => res.json())
      .then((data) => {
        setReq(data);
      });
  }, []);

  const filteredData = req?.filter((item) => {
    return (
      item.userEmail === foodItem.userEmail &&
      item.Food_Name === foodItem.Food_Name
    );
  });
  return (
    <div>
      <table className="table w-full">
        <thead className="py-7">
          <tr className="bg-zinc-800 text-[#ffc933] py-2">
            <th>Requester Image</th>
            <th>Requester Name</th>
            <th>Requester Email</th>
            <th>Request date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="">
          {filteredData && Array.isArray(filteredData) ? (
            filteredData.map((filterData) => (
              <tr>
                <th>
                  {filterData.loggedInUserImage ? (
                    filterData.loggedInUserImage
                  ) : (
                    <img
                      className="w-[40px]"
                      src="https://www.svgrepo.com/show/525577/user-circle.svg"
                    ></img>
                  )}
                </th>
                <th>{filterData?.loggedInUserName}</th>
                <th>{filterData?.loggedInUserEmail}</th>
                <th>{filterData?.RequestTime}</th>
                <th>
                  <button className="bg-green-500 py-2 px-4 text-white rounded">
                    Pending
                  </button>
                </th>
              </tr>
            ))
          ) : (
            <p>No data available</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFood;
