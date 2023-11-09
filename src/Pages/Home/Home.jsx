import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Reviews from "../Reviews/Reviews";
import Foods from "./Foods";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Zero-Waste.bd/Home</title>
      </Helmet>

      <Banner />
      <Foods />
      <Blogs />
      <Reviews />
    </div>
  );
};

export default Home;
