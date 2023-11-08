import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        toast.success(" Your Logged Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
    setError("");
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success(" Your Logged Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
    setError("");
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen ">
      <div className="py-20">
        <div className="max-w-[500px] mx-auto bg-white py-10  px-10 ">
          <h1 className="text-3xl font-bold text-center mb-4">
            Login your account
          </h1>
          <div className="flex w-full flex-col items-center">
            <button
              onClick={handleGoogleLogin}
              className="w-full max-w-xs font-bold shadow rounded-lg py-3  text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none
             hover:shadow-md  focus:shadow-sm focus:shadow-outline"
            >
              <div className="bg-white rounded-full">
                <img
                  className="w-[30px]"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt=""
                />
              </div>
              <span className="ml-4">Sign Up with Google</span>
            </button>
          </div>

          <div className="py-6 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or sign up with e-mail
            </div>
          </div>
          <form onSubmit={handleLogin}>
            <label className="label">
              <span className="label-text text-lg text-[#403F3F] font-semibold">
                Email address
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-3 rounded-md "
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
            />
            <br />
            <label className="label">
              <span className="label-text text-lg text-[#403F3 font-semibold">
                Password
              </span>
            </label>
            <div className="mb-4 relative">
              <input
                className="bg-[#f3f3f3] w-full pl-5 py-4  rounded-md"
                type={showPassword ? "text" : "password"}
                name="password"
                id=""
                placeholder="Enter your password"
              />
              <span
                className="absolute top-[19px] right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <br />

            <button className="bg-[#ffc107] mb-6 rounded-md w-full flex justify-center items-center text-white font-medium py-2 ">
              Login
            </button>

            <p className="text-red-500 font-medium text-center"> {error}</p>

            <p className="text-[#706F6F]  font-medium text-center ">
              Dont’t Have An Account ?{" "}
              <Link to={"/register"}>
                <span className="text-[#ffc107] font-medium">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
