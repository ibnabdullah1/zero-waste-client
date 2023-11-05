import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const userName = user.displayName;
  const userImage = user.photoURL;
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const Food_Name = form.Food_name.value;
    const Quantity = form.food_quantity.value;
    console.log(Quantity);
    const location = form.location.value;
    const Expired_Date = form.Expired_Date.value;
    const Additional_Notes = form.Additional_Notes.value;
    const Status = form.status.value;
    const newFood = {
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
    // console.log(newFood);

    // axios.post("http://localhost:5000/foods", newFood).then((res) => {
    //   console.log(res.data);
    // });

    axios.post("http://localhost:5000/foods", newFood).then((data) => {
      console.log(data);
      if (data.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Food Added Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    });
  };

  return (
    <div className="max-w-[800px] mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-[#ffc107] text-white text-center font-bold uppercase">
        Create a Food
      </div>
      <form onSubmit={handleAddFood} className="py-4 px-6">
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
              defaultValue={"available"}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-[#ffc107] font-bold text-white py-2 px-4 rounded hover:bg-[#e3ba3f] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Added
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
