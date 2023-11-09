import React from "react";
import { RxCross1 } from "react-icons/rx";
const RequestFoodsCard = ({ requestFood, handleDelete }) => {
  const {
    _id,
    Food_Name,
    RequestTime,
    userName,
    location,
    Expired_Date,
    Donation_Money,
    Status,
  } = requestFood;
  return (
    <tr className=" bg-zinc-700 text-white">
      <td>{userName}</td>
      <td>{location}</td>
      <td>{Food_Name}</td>
      <td>{Expired_Date}</td>
      <td>{RequestTime}</td>
      <td>{Donation_Money} tk</td>
      <th>
        {Status === "Delivered" ? (
          <span className="bg-[#f6e600] py-2 px-4 text-white rounded">
            Confirm
          </span>
        ) : (
          <button className="bg-green-500 py-2 px-4 text-white rounded">
            Pending
          </button>
        )}
      </th>
      <th>
        {Status === "Delivered" ? (
          <button className="bg-gray-300 p-2 text-white rounded-[50%]">
            <RxCross1 />
          </button>
        ) : (
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-600 p-2 text-white rounded-[50%]"
          >
            <RxCross1 />
          </button>
        )}
      </th>
    </tr>
  );
};

export default RequestFoodsCard;
