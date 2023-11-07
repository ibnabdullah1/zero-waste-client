import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ffc107]  font-semibold "
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/availableFoods"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ffc107]  font-semibold "
              : ""
          }
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addFood"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ffc107]  font-semibold "
              : ""
          }
        >
          Add Food
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/managefoods"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ffc107]  font-semibold "
              : ""
          }
        >
          Manage foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/foodRequest"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#ffc107]  font-semibold "
              : ""
          }
        >
          Food Request
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" flex justify-between items-center py-3 px-3 shadow   md:max-w-7xl   mx-auto">
      <div className="navbar lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  dropdown-content mt-3 z-[1] w-80 p-2 shadow bg-base-100 rounded"
          >
            {navLinks}

            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#ffc107] font-semibold "
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="w-[70px] h-auto"
            src="https://i.ibb.co/P9crMqr/Zero-Waste-logo.png"
            alt=""
          />
        </div>
      </div>
      <div className=" hidden justify-center items-center  lg:flex">
        <img
          className="w-[100px] h-auto"
          src="https://i.ibb.co/P9crMqr/Zero-Waste-logo.png"
          alt=""
        />
      </div>
      <div className=" hidden lg:flex">
        <ul className="px-1 text-lg flex  gap-8">{navLinks}</ul>
      </div>

      {user?.email ? (
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar online"
          >
            <div className="w-10 rounded-full">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://www.svgrepo.com/show/525577/user-circle.svg"
                }
                alt={user?.displayName}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
          >
            <h2 className="text-lg font-semibold text-center">
              {user?.displayName ? user.displayName : "Unknown user"}
            </h2>

            {user ? (
              <button
                onClick={handleLogOut}
                className="bg-[#ffc107] uppercase w-full text-white font-semibold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-[#ffc107] w-full uppercase text-white font-semibold py-2 px-4 rounded">
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>
      ) : (
        <Link to="/login">
          <button className="bg-[#ffc107] w-full uppercase text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
