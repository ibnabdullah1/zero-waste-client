import { Link, useLoaderData } from "react-router-dom";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const AvailableFoodDetails = () => {
  const food = useLoaderData();
  const { user } = useContext(AuthContext);
  const loggedInUserEmail = user?.email;
  const loggedInUserName = user?.displayName;
  const loggedInUserImage = user?.photoURL;

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
  const currentDate = new Date();

  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  const RequestTime = formattedDate + "-" + formattedTime;

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const Additional_Notes = form.Additional_Notes.value;
    const Donation_Money = form.Donation_Money.value;
    const RequestFood = {
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
      loggedInUserImage,
    };
    axios
      .post("http://localhost:5000/requestFood", RequestFood)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          toast.success("Food added successfully!!");
        }
      });
  };

  return (
    <div className="min-h-[80vh] flex justify-center py-20 items-center">
      <div className="flex gap-8 justify-center ">
        <div>
          <img className="rounded-md lg:w-[600px]" src={img} alt={Food_Name} />
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

          <div className="flex gap-3">
            <label
              htmlFor="my_modal_6"
              className="px-8 py-2 mt-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none"
            >
              Request
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal ">
              <div className="modal-box py-20 px-4">
                <form onSubmit={handleRequest}>
                  <label className="label">
                    <span className="label-text text-lg text-[#403F3F] font-semibold">
                      Additional Notes
                    </span>
                  </label>
                  <input
                    className="bg-[#f3f3f3] w-full pl-5 mb-5 py-4 rounded-md "
                    type="text"
                    name="Additional_Notes"
                    defaultValue={Additional_Notes}
                    placeholder="Additional Notes"
                    id=""
                  />
                  <label className="label">
                    <span className="label-text text-lg text-[#403F3F] font-semibold">
                      Donation Money
                    </span>
                  </label>
                  <input
                    className="bg-[#f3f3f3] w-full pl-5 py-4 rounded-md "
                    type="tel"
                    name="Donation_Money"
                    placeholder="Donation Money"
                    id=""
                    required
                  />

                  <div className="modal-action">
                    <button className="px-8 py-2 mt-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none">
                      Request
                    </button>
                    <label
                      htmlFor="my_modal_6"
                      className="px-8 py-2 mt-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none"
                    >
                      Close!
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <Link to="/availableFoods">
              <button className="px-8 py-2 mt-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodDetails;
