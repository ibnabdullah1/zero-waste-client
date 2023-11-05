import { useLoaderData } from "react-router-dom";

const AvailableFoodDetails = () => {
  const food = useLoaderData();
  console.log(food);
  return (
    <div>
      <h2>Apfosdaer;lgore</h2>
    </div>
  );
};

export default AvailableFoodDetails;
