import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useTable } from "react-table";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageFoods = () => {
  const { user } = useAuth();
  const [manageFoods, setManageFoods] = useState([]);
  //   const axiosSecure = useAxiosSecure();
  const url = `http://localhost:5000/managefoods?email=${user?.email}`;

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setManageFoods(data));
  }, [url]);

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
            <Link to={`update/${row.original._id}`}>
              <button className="inline-block px-8 py-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none focus:ring focus:ring-[#ece8dc]">
                Update
              </button>
            </Link>
            <Link to={`/managefood/${row.original._id}`}>
              <button className="inline-block px-6 py-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none focus:ring focus:ring-[#ece8dc]">
                Manage
              </button>
            </Link>

            <button
              className="inline-block px-8 py-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none focus:ring focus:ring-[#ece8dc]"
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
        fetch(`http://localhost:5000/managefoods/${_id}`, {
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
    <div>
      <h2>{manageFoods.length}</h2>
      <div className="flex justify-center items-center bg-white py-20">
        <table
          {...table.getTableProps()}
          className="table lg:max-w-5xl mx-auto"
        >
          <thead className="bg-white border">
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
