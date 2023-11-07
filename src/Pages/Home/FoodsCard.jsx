import { Link } from "react-router-dom";
const FoodsCard = ({ Food }) => {
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
  } = Food;

  return (
    <div
      style={{
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)",
      }}
      className="bg-white shadow pb-4 rounded-xl"
    >
      <div className="relative">
        <img className="rounded-t-xl" src={img} alt="" />
        <h2 className=" absolute top-4 right-4 bg-white px-4 py-[2px] font-semibold text-black rounded-2xl">
          {Status}
        </h2>
      </div>
      <div className="px-4">
        <h2 className="text-xl my-2 font-bold">{Food_Name}</h2>
        <div className="flex justify-between ">
          <div className="flex gap-2 mb-3">
            <img
              className="w-[40px] h-[40px] rounded-[50%]"
              src={userImage}
              alt={userName}
            />

            <div>
              <h2 className="text-base font-semibold">{userName}</h2>
              <h2 className="text-sm font-medium">{userEmail}</h2>
            </div>
          </div>
          <h4>
            <span className="text-sm font-semibold">Quantity:</span> {Quantity}
          </h4>
        </div>
        <p>
          <span className="text-sm font-semibold">Expired Date : </span>
          {Expired_Date}
        </p>
        <p>
          <span className="text-sm font-semibold">Additional Notes : </span>
          {Additional_Notes}
        </p>
        <p>
          {" "}
          <span className="text-sm font-semibold">location : </span>
          {location}
        </p>

        <div className=" w-full  pt-10">
          <Link to={`/highestQuantity/${_id}`}>
            <button className="bg-[#ffc933] w-full py-3 rounded-lg text-xl font-semibold text-white">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;
