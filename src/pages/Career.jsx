import { useLoaderData, Link } from "react-router-dom";

function Career() {
  const career = useLoaderData();
  return (
    <div className="_career">
      <h2>Career Details</h2>
      <div className="details">
        <h3 className="title">{career.title}</h3>
        <p className="location">located at {career.location}</p>
        <p className="salary">salary: {career.salary}</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          voluptas velit dignissimos aut temporibus, hic animi, officia harum
          ipsa ducimus facilis corrupti tempora dicta doloribus beatae illum
          quibusdam quidem! At deserunt quae perspiciatis maxime?
        </p>
        <Link>Apply</Link>
      </div> 
    </div>
  );
}

export const careerDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) throw Error("Page Not Found");
  return res.json();
};

export default Career;
