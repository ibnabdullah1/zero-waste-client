import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useTable } from "react-table";

const RequestFoods = () => {
  const { user } = useAuth();
  const [requestFoods, setRequestFoods] = useState([]);
  //   const axiosSecure = useAxiosSecure();
  const url = `http://localhost:5000/requestFoods?email=${user?.email}`;
  //   console.log(url);
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setRequestFoods(data));
  }, [url]);

  console.log(requestFoods);

  const columns = React.useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "Food_Name",
      },
      {
        Header: "Quantity",
        accessor: "Quantity",
      },
      {
        Header: "Expired Date",
        accessor: "Expired_Date",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div className=" flex gap-3">
            <button
              className="bg-[#ffc933] px-6 py-2 rounded "
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </button>
            <button
              className="bg-[#ffc933] px-6 py-2 rounded "
              onClick={() => handleDelete(row.original._id)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useTable({
    columns,
    data: requestFoods,
  });

  const handleUpdate = (request) => {
    console.log("Food update");
  };

  const handleDelete = () => {
    console.log("Delete request with ID");
  };

  return (
    <div className="flex justify-center items-center bg-white py-20"></div>
  );
};

export default RequestFoods;
