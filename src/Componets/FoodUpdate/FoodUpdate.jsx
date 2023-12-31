import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const FoodUpdate = () => {
  const Food = useLoaderData();
  console.log(Food);
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
  const navigate = useNavigate();
  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const Food_Name = form.Food_name.value;
    const Quantity = form.food_quantity.value;
    const location = form.location.value;
    const Expired_Date = form.Expired_Date.value;
    const Additional_Notes = form.Additional_Notes.value;
    const Status = form.status.value;
    const UpdateFood = {
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
    };
    console.log(UpdateFood);

    fetch(`https://zero-waste-server.vercel.app/managefoods/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Food Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/managefoods");
        }
      });
  };
  return (
    <div className="max-w-[800px] md:px-8 py-10 md:mx-auto mx-4 mb-8 mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <Helmet>
        <title>Zero-Waste.bd/ManageFoods/Update</title>
      </Helmet>
      <div className="text-2xl py-4 px-6 bg-[#ffc107] text-white text-center font-bold uppercase">
        Update a Food
      </div>
      <form onSubmit={handleUpdateFood} className="py-4 px-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Img
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img"
            type="text"
            name="img"
            placeholder="Food url "
            defaultValue={img}
          />
        </div>

        <div className="lg:flex gap-4 justify-between">
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Food Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="Food_name"
              defaultValue={Food_Name}
              placeholder="Food name"
            />
          </div>

          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="tel"
              defaultValue={Quantity}
              name="food_quantity"
              placeholder="Quantity"
            />
          </div>
        </div>
        <div className="lg:flex gap-4 justify-between">
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Location"
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Expired Date/Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="date"
              name="Expired_Date"
              defaultValue={Expired_Date}
              placeholder="Expired Date/Time"
            />
          </div>
        </div>
        <div className="lg:flex gap-4 justify-between">
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="notes"
            >
              Additional Notes
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Additional_Notes"
              type="text"
              name="Additional_Notes"
              defaultValue={Additional_Notes}
              placeholder="Additional Notes"
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="time"
            >
              Status
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              type="text"
              name="status"
              defaultValue={Status}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-[#ffc107] font-bold text-white py-2 px-4 rounded hover:bg-[#e3ba3f] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoodUpdate;
