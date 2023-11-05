import { useLoaderData } from "react-router-dom";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food);
  const {
    _id,
    img,
    userEmail,
    userName,
    userImage,
    Food_Name,
    Quantity,
    location,
    Expired_Date,
    Additional_Notes,
    Status,
  } = food;

  //   ● Request Button
  //   ● On clicking Request Button button a modal will open with following input field
  //   ○ Food Name( Not editable )
  //   ○ Food Image ( Not editable )
  //   ○ Food Id (Not editable)
  //   ○ Food Donator email ( Not editable )
  //   ○ Food Donator Name(not editable)
  //   ○ User email ( LoggedIn user , Not editable )
  //   ○ Request Date(current time not editable)
  //   ○ Pickup Location(not editable)
  //   ○ Expire Date(not editable)
  //   ○ Additional Notes (editable
  //   ○ Donation Money(editable)
  //   ○ Request Button
  //   On clicking the Request Button will add the requested food into the database food
  //   request collection

  return (
    <div className="min-h-[80vh] flex justify-center py-20 items-center">
      <div className="flex gap-8 justify-center items-center">
        <div>
          <img className="rounded-md" src={img} alt={Food_Name} />
        </div>
        <div>
          <h2 className="text-2xl my-2 font-bold">{Food_Name}</h2>
          <h2 className="flex text-lg items-center gap-2  mt-1">
            <MdProductionQuantityLimits />
            <span className="font-semibold">Quantity:</span>
            {Quantity}
          </h2>
          <h2 className="flex text-lg items-center gap-2 mt-1">
            <AiOutlineUserAdd />
            <span className="font-semibold">Donator:</span>
            {userName}
          </h2>
          <h2 className="flex text-lg items-center gap-2 mt-1">
            <BsCalendar2Date />
            <span className="font-semibold">Expired Date:</span>
            {Expired_Date}
          </h2>
          <h2 className="flex text-lg items-center gap-2 mt-1">
            <BiCurrentLocation />
            <span className="font-semibold">location:</span>
            {location}
          </h2>

          <button className="px-8 py-2 mt-3 text-sm font-medium text-white bg-[#0CB14B] border border-[#0CB14B] rounded active:text-[#0CB14B] hover:bg-transparent hover:text-[#0CB14B] focus:outline-none">
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
