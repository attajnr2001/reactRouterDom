import { useLoaderData, Link } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      <h2>All Careers</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
        laudantium ipsum. Reiciendis perspiciatis, atque cupiditate explicabo
        libero ad fugiat cumque sunt repellendus quasi, doloremque excepturi,
        fugit natus nihil dignissimos illo nobis laudantium dolorem pariatur.
      </p>
      <div className="each">
        {careers.map((elt) => (
          <Link to={`${elt.id}`} key={elt.id}>
            <div className="career">
              <p>{elt.title}</p>
              <span>location: {elt.location}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
 
  return res.json();
};

export default Careers;
