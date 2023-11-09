import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useTable } from "react-table";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageFoods = () => {
  const { user } = useAuth();
  const [manageFoods, setManageFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/managefoods?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => setManageFoods(res.data));
  }, [axiosSecure, url]);

  // useEffect(() => {
  //   fetch(url, { credentials: "include" })
  //     .then((res) => res.json())
  //     .then((data) => setManageFoods(data));
  // }, [url]);

  // console.log(manageFoods);
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
          <div className=" md:flex gap-3">
            <Link to={`update/${row.original._id}`}>
              <button className="inline-block md:mt-0 mt-1 px-8 py-3  text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none focus:ring focus:ring-[#ece8dc]">
                Update
              </button>
            </Link>
            <Link to={`/managefood/${row.original._id}`}>
              <button className="inline-block md:mt-0 mt-1  px-8 py-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none focus:ring focus:ring-[#ece8dc]">
                Manage
              </button>
            </Link>

            <button
              className="inline-block px-8 md:mt-0 mt-1 py-3  text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none focus:ring focus:ring-[#ece8dc]"
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
    data: manageFoods,
  });

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://zero-waste-server.vercel.app/managefoods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your Food has been deleted.", "success");

              const remaining = manageFoods.filter(
                (manageFood) => manageFood._id !== _id
              );
              setManageFoods(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-center items-center bg-white py-20">
        <table
          {...table.getTableProps()}
          className="table w-full lg:max-w-5xl mx-auto"
        >
          <thead className="bg-gray-200">
            {table.headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...table.getTableBodyProps()} className="bg-[#f9f9f9]">
            {table.rows.map((row) => {
              table.prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFoods;
