const AvailableFoodCard = ({ availableFood }) => {
  const {
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
  } = availableFood;

  //   Food Name
  //   ● Donator Image & Name
  //   ● Food Quantity
  //   ● Pickup Location
  //   ● Expired Date/Time
  //   ● Additional Notes
  //   ● View Details Button

  return (
    <div className=" bg-white pb-4 rounded-xl ">
      <div>
        <img className="rounded-t-xl" src={img} alt="" />
      </div>
      <div className="px-4">
        <h2 className="text-xl font-bold">{Food_Name}</h2>
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <img
              className="w-[40px] h-[40px] rounded-[50%]"
              src={userImage}
              alt=""
            />
            <h2>{userName} </h2>
          </div>
          <h4>Quantity: {Quantity}</h4>
        </div>
        <p>Expired Date :{Expired_Date}</p>
        <p>Additional Notes :{Additional_Notes}</p>
        <p>location: {location}</p>

        <div className=" w-full  pt-10">
          <button className="bg-[#ffc933] w-full py-3 rounded-lg text-xl font-semibold text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodCard;
