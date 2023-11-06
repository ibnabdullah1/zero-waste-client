import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import RequestFoodsCard from "./RequestFoodsCard";
import toast from "react-hot-toast";

const RequestFoods = () => {
  const { user } = useAuth();
  const [requestFoods, setRequestFoods] = useState([]);
  const url = `http://localhost:5000/requestfoods?email=${user?.email}`;

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setRequestFoods(data));
  }, [url]);
  console.log(requestFoods);

  const handleDelete = (id) => {
    const proceed = true;
    if (proceed) {
      fetch(`http://localhost:5000/requestfoods/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Requeued deleted successfully");
            const remaining = requestFoods.filter(
              (requestFood) => requestFood._id !== id
            );
            setRequestFoods(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h3>RequestFoods :{requestFoods.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="py-7">
            <tr className="bg-zinc-800 text-[#ffc933] py-2">
              <th>Donator</th>
              <th>Pickup location</th>
              <th>Expire date</th>
              <th>Request date</th>
              <th>Donation amount</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody className="">
            {requestFoods && Array.isArray(requestFoods) ? (
              requestFoods.map((requestFood) => (
                <RequestFoodsCard
                  key={requestFood._id}
                  requestFood={requestFood}
                  handleDelete={handleDelete}
                ></RequestFoodsCard>
              ))
            ) : (
              <p>No data available</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestFoods;
