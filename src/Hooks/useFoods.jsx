import { useEffect, useState } from "react";

const useFoods = () => {
  const [Foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://zero-waste-server.vercel.app/highestquantity")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setIsLoading(false);
      });
  }, []);
  return { Foods, isLoading };
};

export default useFoods;

// useEffect(() => {
//   setIsLoading(true);
//   fetch(
//     "https://zero-waste-server.vercel.app/highestQuantity"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       setFoods(data);
//       setIsLoading(false);
//     });
// }, []);
