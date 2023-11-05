import { useLoaderData } from "react-router-dom";

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
    <div className="flex">
      <div>
        <img src={img} alt={Food_Name} />
      </div>
      <div>
        <h2>{Food_Name}</h2>
        <h2>Quantity: {Quantity}</h2>
        <h2>Donator: {userName}</h2>
        <p>Expired Date: {Expired_Date}</p>
        <p>location: {location} </p>
        <button className="px-8 py-2 mt-3 text-sm font-medium text-white bg-[#0CB14B] border border-[#0CB14B] rounded active:text-[#0CB14B] hover:bg-transparent hover:text-[#0CB14B] focus:outline-none">
          Request
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
