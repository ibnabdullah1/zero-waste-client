import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import RequestFoodsCard from "./RequestFoodsCard";
import toast from "react-hot-toast";

const RequestFoods = () => {
  const { user } = useAuth();
  const [requestFoods, setRequestFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://zero-waste-server.vercel.app/requestfoods?email=${user?.email}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setRequestFoods(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = true;
    if (proceed) {
      fetch(`https://zero-waste-server.vercel.app/requestfoods/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
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
    <div className="min-h-[60vh]">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="py-7">
            <tr className="bg-zinc-800 text-[#ffc933] py-2">
              <th>Donator</th>
              <th>Pickup location</th>
              <th>Food Name</th>
              <th>Expire date</th>
              <th>Request date</th>
              <th>Donation amount</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          {!isLoading && (
            <tbody className="">
              {requestFoods &&
                Array.isArray(requestFoods) &&
                requestFoods.map((requestFood) => (
                  <RequestFoodsCard
                    key={requestFood._id}
                    requestFood={requestFood}
                    handleDelete={handleDelete}
                  ></RequestFoodsCard>
                ))}
            </tbody>
          )}
        </table>
      </div>
      {isLoading && (
        <div className="flex min-h-[60vh] justify-center items-center">
          <img
            class="w-10 h-10 animate-spin"
            src="https://www.svgrepo.com/show/448500/loading.svg"
            alt="Loading icon"
          ></img>
        </div>
      )}
      {requestFoods && requestFoods.length === 0 ? (
        <div className="py-10">
          {!isLoading && (
            <div>
              <div className="flex justify-center items-center">
                <img
                  className="w-[100px] mt-10"
                  src="https://i.ibb.co/CJSQtVH/Empty-Cart.png"
                  alt=""
                />
              </div>
              <p className="text-center text-2xl font-semibold mt-3">
                You have not sent any request.
              </p>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RequestFoods;
