import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const ManageFood = () => {
  const { id } = useParams();
  const [requests, setRequests] = useState([]);
  const [foodItem, setFoodItem] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    Axios.get(`https://zero-waste-server.vercel.app/managefoods/${id}`)
      .then((response) => {
        setFoodItem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    fetch("https://zero-waste-server.vercel.app/req")
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
      });
  }, []);

  useEffect(() => {
    const filteredData = requests?.filter((item) => {
      return (
        item.userEmail === foodItem?.userEmail &&
        item.Food_Name === foodItem?.Food_Name
      );
    });
    setFilteredData(filteredData);
  }, [requests, foodItem]);

  const handleRequestConfirm = (id) => {
    fetch(`https://zero-waste-server.vercel.app/requestfoods/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Status: "Delivered" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = filteredData.filter(
            (filterData) => filterData._id !== id
          );
          const updated = filteredData.find(
            (filterData) => filterData._id === id
          );
          updated.Status = "Delivered";
          const newUpdated = [updated, ...remaining];
          setFilteredData(newUpdated);
        }
      });
  };

  return (
    <div className="min-h-[60vh]">
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
              <tr key={filterData._id}>
                <th>
                  {filterData.loggedInUserImage ? (
                    <img
                      className="w-[40px] rounded-[50%]"
                      src={filterData.loggedInUserImage}
                    ></img>
                  ) : (
                    <img
                      className="w-[40px] rounded-[50%]"
                      src="https://www.svgrepo.com/show/525577/user-circle.svg"
                    ></img>
                  )}
                </th>
                <th>{filterData?.loggedInUserName}</th>
                <th>{filterData?.loggedInUserEmail}</th>
                <th>{filterData?.RequestTime}</th>
                <th>
                  {filterData.Status === "Delivered" ? (
                    <span className="bg-amber-300 py-2 px-4 text-white rounded">
                      Delivered
                    </span>
                  ) : (
                    <button
                      onClick={() => handleRequestConfirm(filterData._id)}
                      className="bg-green-500 py-2 px-4 text-white rounded"
                    >
                      Pending
                    </button>
                  )}
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
