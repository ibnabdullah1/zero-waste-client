import React from "react";
import { RxCross1 } from "react-icons/rx";
const RequestFoodsCard = ({ requestFood, handleDelete }) => {
  console.log(requestFood);
  const {
    _id,
    img,
    RequestTime,
    userEmail,
    userName,
    userImage,
    Food_Name,
    Quantity,
    location,
    Expired_Date,
    Additional_Notes,
    Donation_Money,
    Status,
    loggedInUserEmail,
    loggedInUserName,
  } = requestFood;
  return (
    <tr className=" bg-zinc-700 text-white">
      <td>{userName}</td>
      <td>{location}</td>
      <td>{Expired_Date}</td>
      <td>{RequestTime}</td>
      <td>{Donation_Money} tk</td>
      <th>
        {Status === "confirm" ? (
          <span className="bg-emerald-500 py-2 px-4 text-white rounded">
            Confirmed
          </span>
        ) : (
          <button className="bg-green-500 py-2 px-4 text-white rounded">
            Pending
          </button>
        )}
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-600 p-2 text-white rounded-[50%]"
        >
          <RxCross1 />
        </button>
      </th>
    </tr>
  );
};

export default RequestFoodsCard;
