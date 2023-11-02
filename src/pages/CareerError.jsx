import { useRouteError, Link } from "react-router-dom";

function CareerError() {
  const error = useRouteError();
  return (
    <div className="careerError">
      <h2>{error.message}</h2>
      <Link to={"/"}>Go back to Home</Link>
    </div>
  );
}

export default CareerError;
